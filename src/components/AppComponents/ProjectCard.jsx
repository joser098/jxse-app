const ProjectCard = ({ project, index, current }) => {
  return (
    <div
      className="min-w-fit bg-fa rounded-lg mt-3 mx-5 transition-transform ease-out duration-500 flex flex-col justify-between"
      style={index == current ? { transform: `scale(1.1)` } : null}
    >
      <div>
        <img
          className="rounded-lg"
          src={`/projects/project${index}.png`}
          alt={project.title}
        />
        <h3 className="text-black font-bold text-2xl px-2 py-3">
          {project.title}
        </h3>
        <p className=" text-4 px-2 mb-4 text-sm">{project.description}</p>

        {project?.technologies?.map((tech) => {
          return (
            <span
              key={tech}
              className=" bg-black text-white p-2 m-1 rounded-full text-[10px]"
            >
              {tech}
            </span>
          );
        })}
      </div>
      <div className="flex justify-evenly mt-4 mb-2">
        <a className="bg-6 p-2 rounded-lg" href={project.repository}>
          CODE
        </a>
        <a className="bg-1 py-2 px-5 rounded-lg" href={project.deploy}>
          Ir al proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
