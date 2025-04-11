import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { handleScroll } from "../utils/handleScroll";
import { IoMenu, IoClose } from "react-icons/io5";
import { headerSections } from "../data/headerSections";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleMenuItemClick = (sectionId) => {
    setClickedItem(sectionId);
  };

  const handleTapComplete = () => {
    if (clickedItem) {
      handleScroll(clickedItem);
      setIsOpen(false);
      setClickedItem(null);
    }
  };

  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.header
      className="bg-bgHeader py-2 px-4 w-[100svw] h-[60px] fixed top-0 left-0 right-0 z-10 backdrop-blur-md font-Kalnia"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center h-full w-full">
        <motion.img
          className="rounded-full w-8 cursor-pointer z-20"
          src="/images/branding/logo_64_b&w_round.png"
          alt="logo"
          onClick={() => {
            handleScroll(headerSections[0]._id);
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />

        <div className="gap-16 xl:gap-24 2xl:gap-32 hidden md:flex opacity- text-[14px] xl:text-[16px] 2xl:text-[18px] tracking-wider">
          {headerSections.map((section) => (
            <motion.span
              key={section._id}
              className="cursor-pointer relative"
              onClick={() => handleScroll(section._id)}
              whileHover={{
                scale: 1.01,
                textShadow: "0 1px 5px rgba(0,0,0,0.61)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.975 }}
            >
              {section.headerText}
            </motion.span>
          ))}
        </div>

        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="scale-200 z-20 pr-2 opacity-80 bg-transparent border-none cursor-pointer md:text-transparent md:cursor-auto"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-bgDropDownMenu backdrop-blur-xs flex flex-col items-center justify-center gap-6"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {headerSections.map((section, index) => (
              <motion.span
                key={section._id}
                className="cursor-pointer text-2xl tracking-wider"
                onClick={() => handleMenuItemClick(section._id)}
                variants={menuItemVariants}
                custom={index}
                whileTap={{
                  scale: 0.95,
                  textShadow: "0 1px 5px rgba(0,0,0,0.9)",
                  transition: { duration: 0.1 },
                }}
                onAnimationComplete={handleTapComplete}
              >
                {section.headerText}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
