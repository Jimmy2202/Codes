import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contacts(props) {
  return (
    <footer
      {...props}
      className="bg-red-700 shadow-md w-[100vw] text-red-200  p-4"
    >
      <div className="flex flex-col gap-3 w-full p-6">
        <h1 className="text-[24px] mb-6">
          Contato e <span className="text-[35px] text-red-950">Links</span>
        </h1>
        <h2 className="flex flex-row gap-2 items-center hover:scale[1.1]">
          Email: artrkmj214@gmail.com <MdEmail className="scale-[1.2]" />{" "}
        </h2>
        <a
          href="https://github.com/Jimmy2202/Codes.git"
          className="flex flex-row gap-2 items-center hover:text-black transition duration-500"
        >
          Repositório Principal Github <FaGithub className="scale-[1.2]" />
        </a>

        <a
          href="https://www.linkedin.com/in/arthurdeoliveirapinto"
          className="flex flex-row gap-2 items-center hover:text-black transition duration-500"
        >
          LinkedIn <FaLinkedin className="scale-[1.2]" />
        </a>

        <a
          href="https://drive.google.com/file/d/1XP5il3vSBBmz1cMh6e8fPe1HWRruIK9K/view?usp=drive_link"
          className="flex flex-row gap-2 items-center hover:text-black transition duration-500"
        >
          Certificado 1
        </a>

        <a
          href="https://drive.google.com/file/d/1yuUJWCcsaQvMpAxM8DGh7g7UwwoW1Gag/view?usp=drive_link"
          className="flex flex-row gap-2 items-center hover:text-black transition duration-500"
        >
          Certificado 2
        </a>

        <a
          href="https://drive.google.com/file/d/1ytVjN9MKsSaq8q3jxuCY35CinFU9qNe-/view?usp=drive_link"
          className="flex flex-row gap-2 items-center hover:text-black transition duration-500"
        >
          Certificado 3
        </a>

        <a
          href="https://drive.google.com/file/d/1ivIqblTlCCzNPs2bWcQVKaUPFuDOwlOF/view?usp=drive_link"
          className="flex flex-row gap-2 items-center hover:text-black transition duration-500"
        >
          Certificado 4
        </a>
      </div>
    </footer>
  );
}

export default Contacts;
