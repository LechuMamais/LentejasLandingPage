import { handleScroll } from "../utils/handleScroll";

function Header() {
  return (
    <header className="bg-bgHeader py-8 px-12 w-full h-[60px] fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
      <div className="flex justify-between items-center h-full">
        <img
          className="rounded-full w-8"
          src="/images/branding/logo_64_b&w_round.png"
          alt="logo"
        />

        <div className="flex gap-16">
          <span className="cursor-pointer" onClick={() => handleScroll("home")}>
            Inicio
          </span>
          <span
            className="cursor-pointer"
            onClick={() => handleScroll("products")}
          >
            Productos
          </span>
          <span
            className="cursor-pointer"
            onClick={() => handleScroll("about")}
          >
            Nosotros
          </span>
          <span
            className="cursor-pointer"
            onClick={() => handleScroll("opinions")}
          >
            Opiniones
          </span>
        </div>

        <button className="bg-transparent border-none cursor-pointer">
          Burger menu
        </button>
      </div>
    </header>
  );
}

export default Header;
