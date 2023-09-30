"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("https://server-nglt-dev.fl0.io/jxse/projects");
        const data = await res.json();

        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProjects();
  }, []);

  const handlerNext = () => {
    current === projects.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  const handlerPrev = () => {
    current === 0 ? null : setCurrent(current - 1);
  };

  return (
    <section className="h-[calc(100vh-90px)] px-8 py-2 flex flex-col justify-between">
      <header>
        <h3 className="font-thin text-lg mb-1">- Mis proyectos</h3>
        {/* <h2 className=" text-3xl my-2 font-semibold">Mis proyectos</h2> */}
      </header>

      <div className="relative h-full max-h-[500px] max-w-xs my-1">
        <div
          className="flex transition-transform ease-out duration-500 h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects?.map((project, index) => {
            return (
              <ProjectCard
                key={project._id}
                project={project}
                index={index}
                current={current}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center my-2">
        <button
          onClick={handlerPrev}
          className=" bg-9 py-2 px-4 rounded-full m-4"
        >
          Prev
        </button>
        <button
          onClick={handlerNext}
          className=" bg-9 py-2 px-4 rounded-full m-4"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
