import { useState } from "react";
import { handleScroll } from "../utils/handleScroll";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          className="rounded-full w-8 cursor-pointer"
          src="/images/branding/logo_64_b&w_round.png"
          alt="logo"
          onClick={() => handleScroll(sections[0]._id)}
        />

        {/* NAV DESKTOP */}
        <div className="gap-16 hidden md:flex">
          {sections.map((section) => (
            <span
              key={section}
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
          className="scale-200 z-20 pr-2 opacity-80 bg-transparent border-none cursor-pointer md:hidden"
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
            className="cursor-pointer text-2xl"
            onClick={() => {
              handleScroll(section._id);
              setIsOpen(false); // Cerrar menú al hacer clic
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
