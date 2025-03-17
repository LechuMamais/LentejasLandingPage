import { useEffect, useState } from "react";
import { handleScroll } from "../utils/handleScroll";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("max-h-screen");
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("max-h-screen");
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup cuando el componente se desmonta
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const sections = [
    { _id: "home", headerText: "Inicio" },
    { _id: "products", headerText: "Productos" },
    { _id: "about", headerText: "Nosotros" },
    { _id: "opinions", headerText: "Opiniones" },
  ];

  return (
    <header className="bg-bgHeader py-2 px-4 w-[100svw] h-[60px] fixed top-0 left-0 right-0 z-10 backdrop-blur-md font-Kalnia">
      <div className="flex justify-between items-center h-full w-full">
        <img
          className="rounded-full w-8 cursor-pointer z-20"
          src="/images/branding/logo_64_b&w_round.png"
          alt="logo"
          onClick={() => {
            handleScroll(sections[0]._id);
            setIsOpen(false);
          }}
        />

        {/* NAV DESKTOP */}
        <div className="gap-16 hidden md:flex opacity- text-[14px] tracking-wider">
          {sections.map((section) => (
            <span
              key={section._id}
              className="cursor-pointer"
              onClick={() => handleScroll(section._id)}
            >
              {section.headerText}
            </span>
          ))}
        </div>

        {/* BOTÓN MENÚ MOBILE */}
        <button
          onClick={toggleMenu}
          className="scale-200 z-20 pr-2 opacity-80 bg-transparent border-none cursor-pointer md:text-transparent md:cursor-auto"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-bgDropDownMenu backdrop-blur-xs flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {sections.map((section) => (
          <span
            key={section._id}
            className="cursor-pointer text-2xl tracking-wider"
            onClick={() => {
              handleScroll(section._id);
              setIsOpen(false);
            }}
          >
            {section.headerText}
          </span>
        ))}
      </div>
    </header>
  );
}

export default Header;
