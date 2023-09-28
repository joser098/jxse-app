"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("https://server-nglt-dev.fl0.io/jxse/projects")
      .then((res) => res.json())
      .then((res) => setProjects(res))
      .catch((err) => console.log(err));
  }, []);

  const handlerNext = () => {
    current === projects.length - 1 ? 0 : setCurrent(current + 1);
    console.log(current);
  };

  const handlerPrev = (current, projects) => {
    current === 0 ? projects.length - 1 : setCurrent(current - 1);
    console.lo(current);
  };

  return (
    <section className="h-[calc(100vh-90px)] px-8 py-4">
      <h3 className="font-thin ">- Portfolio</h3>
      <h2 className=" text-3xl my-2 font-semibold">Mis proyectos</h2>

      <div className="flex overflow-hidden relative">
        {projects?.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handlerNext}
          className=" bg-9 py-2 px-4 rounded-full m-4"
        >
          Next
        </button>
        <button
          onClick={handlerPrev}
          className=" bg-9 py-2 px-4 rounded-full m-4"
        >
          Prev
        </button>
      </div>
    </section>
  );
};

export default Projects;
