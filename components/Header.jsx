import LinksHeader from "./LinksHeader";
import { FolderKanban, Headset, User } from "lucide-react";

function Header() {
  return (
    <header className="w-screen p-10 h-[20vh] bg-red-500 text-white shadow-lg flex justify-center items-center ">
      <ul className="w-full max-sm:text-[10px] max-sm:justify-center max-sm:items-center max-sm:p-7 flex flex-row gap-10 justify-end">
        <li>
          <LinksHeader to="section1" smooth={true}>
            <User className="scale-125 max-sm:scale-[1]" /> Sobre Mim
          </LinksHeader>
        </li>
        <li>
          <LinksHeader to="section2" smooth={true}>
            <FolderKanban className="scale-125 max-sm:scale-[1]" /> Projetos
          </LinksHeader>
        </li>
        <li>
          <LinksHeader to="footer" smooth={true}>
            <Headset className="scale-125 max-sm:scale-[1]" /> Contato
          </LinksHeader>
        </li>
        <li>
          <a
            href="./CV.pdf"
            download="Currículo.pdf"
            aria-label="Download do currículo"
          >
            <button className="bg-red-900 text-white p-2 rounded-lg shadow-xl hover:bg-red-400 hover:text-red-950 transition duration-500">
              Currículo
            </button>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
