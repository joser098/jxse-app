const Landing = () => {
  return (
    <>
      <section className="flex flex-col px-8 justify-center h-[calc(100vh-119px)] md:px-0">
        <div>
          <h2 className="text-4xl hover:translate-x-2 transition-transform md:text-5xl animate-slideInLeft1s">
            Hola,
          </h2>
          <h2 className="text-4xl hover:translate-x-2 transition-transform md:text-5xl animate-slideInLeft2s">
            mi nombre es José.
          </h2>
          <p className=" text-6 my-1 text-sm md:text-base transition-all animate-slideInLeft3s">
            ¡No sé cómo llegaste aquí, pero bienvenido!
          </p>

          <button className="bg-ea text-black py-3 px-6 mt-9 rounded-xl hover:bg-9 cursor-pointer transition-all animate-slideInLeft4s">
            <a href="#contacto">Contacto</a>
          </button>
        </div>
      </section>

      <div className="flex justify-center animate-bounce">
        <svg
          width="45px"
          height="45px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#FFF"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 4V20M12 20L8 16M12 20L16 16"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </>
  );
};

export default Landing;
