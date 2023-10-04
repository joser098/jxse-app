"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [current, setCurrent] = useState(1);

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
        <h3 className="font-thin text-lg mb-1 md:text-4xl">- Mis proyectos</h3>
        {/* <h2 className=" text-3xl my-2 font-semibold">Mis proyectos</h2> */}
      </header>

      <div className="relative h-full max-h-[500px] max-w-xs my-1 lg:translate-x-[calc(100vw/2.8)]">
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
          className=" bg-1 border border-white p-2 rounded-full m-4"
        >
          <svg className="with-icon_icon__MHUeb" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          onClick={handlerNext}
          className=" bg-1 border border-white p-2 rounded-full m-4"
        >
          <svg className="with-icon_icon__MHUeb" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;
