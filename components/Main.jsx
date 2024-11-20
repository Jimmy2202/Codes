import { ChevronDown, ChevronUp, Contact } from "lucide-react";
import { useState } from "react";
import { Element } from "react-scroll";
import Project from "./Projects";
import { FaCss3, FaHtml5, FaJava, FaJsSquare, FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import ListKnowledge from "./ListKnowledge";
import { SiMysql } from "react-icons/si";
import { CiFolderOn } from "react-icons/ci";
import Contacts from "./Contact";

function Main() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Folder",
      description: "Projeto de um jogo da velha feito em JavaScript,CSS e HTML",
      link: "https://jimmy2202.github.io/Jogo-da-Velha/",
      icon: "down",
    },
    {
      id: 1,
      title: "Folder",
      description:
        "Projeto de um jogo da forca feito em JavaScript, CSS e HTML",
      link: "https://jimmy2202.github.io/hangman/",
      icon: "down",
    },
    {
      id: 2,
      title: "Folder",
      description:
        "Projeto feito com CSS, HTML e JavaScript, que simula um site informativo sobre um plano de saúde",
      link: "https://jimmy2202.github.io/Plano-False-Health/",
      icon: "down",
    },
    {
      id: 3,
      title: "Folder",
      description:
        "Site feito em JS, CSS e HTML que simula um e-commerce esportivo",
      link: "https://jimmy2202.github.io/Site-Esportivo/",
      icon: "down",
    },
    {
      id: 4,
      title: "Folder",
      description:
        "Site feito com ReactJS e Tailwind, para buscas de filmes, séries e atores",
      link: "https://jimmy2202.github.io/Search-Movies/",
      icon: "down",
    },
  ]);

  const showDetailsProjectAndIcon = (id) => {
    setProjects((prevprojects) => {
      return prevprojects.map((project) => {
        if (project.id == id) {
          let title = project.title;
          let description = project.description;
          return {
            ...project,
            title: description,
            description: title,
            icon: project.icon == "down" ? "up" : "down",
          };
        }
        return project;
      });
    });
  };

  const renderProjectIcon = (icon, id) => {
    const IconComponent = icon === "down" ? ChevronDown : ChevronUp;

    return (
      <div
        className="flex flex-row justify-center"
        title="Clique para ver detalhes do projeto"
      >
        <IconComponent
          onClick={() => showDetailsProjectAndIcon(id)}
          className="text-red-950 hover:text-red-700 transition ease-in-out duration-700 hover:cursor-pointer"
        />
      </div>
    );
  };

  const knowledgeList1 = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-[35px] hover:text-black" />,
    },
    {
      name: "CSS",
      icon: <FaCss3 className="text-[35px] hover:text-blue-700" />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-[35px] hover:text-orange-600" />,
    },
    { name: "Express JS", icon: null },
    {
      name: "Tailwind",
      icon: <RiTailwindCssLine className="text-[35px] hover:text-[#34c6eb]" />,
    },
  ];

  const knowledgeList2 = [
    {
      name: "ReactJS",
      icon: (
        <FaReact className="text-[35px] hover:text-[#34c6eb] hover:animate-spin_custom" />
      ),
    },
    {
      name: "Python",
      icon: <FaPython className="text-[35px] hover:text-yellow-700" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-[35px] hover:text-red-700" />,
    },
    { name: "C", icon: null },
    {
      name: "MySQL",
      icon: <SiMysql className="text-[35px] hover:text-blue-600" />,
    },
  ];

  return (
    <main className="flex justify-center items-center flex-col gap-10">
      <Element
        name="section1"
        className="w-full  flex items-center flex-col justify-center gap-24"
      >
        <div className="max-hm:mt-20 container_section1 w-[90vw] border border-red-700 mt-10  h-fit bg-[#ffaeae] text-red-700 transition duration-700 hover:bg-red-700 hover:text-red-200 animate-float">
          <span className="absolute p-2 max-hm:top-[-3vh] max-sm:top-[-3.5vh] top-[-8vh] left-40 bg-[#ffaeae] text-red-900 transition duration-500 rounded-lg">
            Sobre Mim
          </span>
          <div className="p-10 text-center">
            Meu nome é Arthur de Oliveira Pinto, tenho 24 anos, sou estudante de
            Ciência da Computação. Atualmente estou no 7º período e em busca da
            minha primeira vaga de estágio dentro do ramo do desenvolvimento de
            software.
          </div>
        </div>

        <div className="flex max-sm:flex-col max-hm:items-stretch max-hm:justify-between max-sm:justify-center max-sm:items-center flex-row w-screen">
          <div className="flex flex-col max-hm:h-fit max-sm:h-fit max-sm:items-center items-start w-screen h-[60vh] ml-10 p-2 gap-9 border-r-[1px] max-sm:border-r-0 max-sm:border-b-[1px] max-sm:ml-0 border-red-700/[0.2]">
            <h1 className="text-red-600 max-sm:text-center text-[30px]">
              Conhecimentos e{" "}
              <span className="text-red-900 text-[40px] font-bold animate-pulse_custom">
                Tecnologias
              </span>
            </h1>

            <div className="max-sm:mb-4">
              <ul className="flex flex-col justify-start max-sm:items-center text-left items-start">
                {knowledgeList1.map((item) => (
                  <ListKnowledge key={item.name}>
                    {item.name} {item.icon}
                  </ListKnowledge>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col max-hm:justify-end max-hm:m-[0px] max-sm:items-center max-sm:mt-[3vh] max-sm2:mt-[20vh] items-start w-full p-3 gap-9 mt-[13vh] max-sm:ml-0 max-sm:p-3">
            <div className="ml-9">
              <ul className=" flex flex-col justify-start max-sm:text-center max-sm:items-center text-left items-start">
                {knowledgeList2.map((item) => (
                  <ListKnowledge key={item.name}>
                    {item.name} {item.icon}
                  </ListKnowledge>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Element>

      <Element name="section2" className="flex flex-col gap-14 p-5">
        <p className="p-5 shadow-red-800/[0.8] shadow-sm w-screen text-center bg-red-400 text-red-100 text-[20px]">
          {" "}
          Projetos{" "}
        </p>

        <div className="flex flex-row gap-7 p-5 justify-between items-center max-sm:flex-col">
          {projects.map((project) => (
            <div key={project.id}>
              {renderProjectIcon(project.icon, project.id)}
              <Project>
                <a href={project.link} title="Clique para ir ao projeto...">
                  {project.title == "Folder" ? (
                    <CiFolderOn className="scale-[2] max-sm:scale-[3]" />
                  ) : (
                    project.title
                  )}
                </a>
              </Project>
            </div>
          ))}
        </div>
      </Element>

      <Element name="footer">
        <Contacts></Contacts>
      </Element>
    </main>
  );
}

export default Main;
