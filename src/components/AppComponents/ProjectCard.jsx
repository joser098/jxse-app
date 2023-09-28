const ProjectCard = ({ project }) => {
  return (
    <div className="min-w-fit bg-fa rounded-lg mt-3">
      <img className="rounded-lg" src={project.image} alt={project.title} />
      <div>
        <h3 className="text-black font-bold text-xl px-2 py-3">
          {project.title}
        </h3>
        <p className=" text-4 px-2 mb-4 text-xs">{project.description}</p>

        {project?.technologies?.map((tech) => {
          return (
            <span key={tech} className=" bg-black text-white p-2 m-1 rounded-full text-xs">
              {tech}
            </span>
          );
        })}
      </div>
      <div className="flex justify-evenly mt-4 mb-2">
        <a className="bg-6 p-2 rounded-lg" href={project.repository}>CODE</a>
        <a className="bg-1 py-2 px-5 rounded-lg" href={project.deploy}>Ir al proyecto</a>
      </div>
    </div>
  );
};

export default ProjectCard;
