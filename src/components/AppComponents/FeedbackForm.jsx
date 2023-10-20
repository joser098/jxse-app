import {
  calificationOptions,
  countries,
  itKnowledge,
  satisfactionOptions,
} from "@/services/constants";

const FeedbackForm = () => {
  return (
    <form className="w-full max-w-4xl flex flex-col border rounded-lg bg-black p-3 text-sm md:text-base">
      <fieldset className="border rounded-lg px-3 mb-3 flex flex-col gap-3 py-2">
        <legend>Algunos datos</legend>
        <label className="cursor-pointer">
          Edad:
          <input className="rounded mx-2 w-10" type="number" />
        </label>

        <label className="cursor-pointer">
          Pais:
          <select className="rounded mx-2 p-1" name="countries">
            {countries.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </label>

        <label className="cursor-pointer">
          Conocimientos de desarrollo web:
          <select className="rounded sm:mx-2 p-1 my-1 cursor-pointer" name="it">
            {itKnowledge.map((level) => {
              return (
                <option key={level.id} value={level.id}>
                  {level.description}
                </option>
              );
            })}
          </select>
        </label>
      </fieldset>

      <fieldset className="border rounded-lg px-3 mb-3 flex flex-col gap-3 py-2">
        <legend>Portfolio</legend>
        <span>¿Has visitado mi portfolio anteriormente?</span>

        <div className="flex gap-7 mb-2">
          <label className="bg-3 p-2 flex gap-1 rounded cursor-pointer">
            Si
            <input type="radio" name="seen" />
          </label>

          <label className="bg-3 p-2 flex gap-1 rounded cursor-pointer">
            No
            <input type="radio" name="seen" />
          </label>
        </div>

        <label className="my-3 cursor-pointer">
          En una escala del 1 al 10, ¿cómo calificarías la impresión general de
          mi portfolio?{" "}
          <span className="text-[10px] block">
            (1 siendo la peor puntuación y 10 la mejor)
          </span>
          <input className="w-full mt-2" type="range" min="1" max="10" />
        </label>

        <label className="mb-3 cursor-pointer">
          ¿Qué opinas sobre el diseño y la navegación de mi portfolio?
          <select className="rounded sm:mx-2 my-1 block p-1" name="opinion">
            {satisfactionOptions.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              );
            })}
          </select>
        </label>
      </fieldset>

      <fieldset className="border rounded-lg px-3 mb-3 flex flex-col gap-3 py-2">
        <legend>Contenido</legend>

        <label className="mb-3 cursor-pointer">
          ¿Cómo calificarías la calidad y la presentación de los trabajos en mi
          portfolio?
          <select
            className="rounded sm:mx-2 my-1 block p-1"
            name="califiaction"
          >
            {calificationOptions.map((calification) => {
              return (
                <option key={calification.id} value={calification.id}>
                  {calification.description}
                </option>
              );
            })}
          </select>
        </label>

        <label className="cursor-pointer">
          ¿Qué trabajos o secciones de mi portfolio te parecieron más
          destacados?
          <textarea
            className="rounded resize-none p-2 my-2 w-full"
            cols="10"
            rows="5"
            placeholder="Respuesta"
          ></textarea>
        </label>

        <label className="cursor-pointer">
          ¿Hay algún trabajo en particular que sientas que necesita mejoras o
          revisión?
          <textarea
            className="rounded resize-none p-2 my-2 w-full"
            cols="10"
            rows="5"
            placeholder="Respuesta"
          ></textarea>
        </label>
      </fieldset>

      <fieldset className="border rounded-lg px-3 mb-3 flex flex-col gap-3 py-2">
        <legend>Adicional</legend>
        <label className="cursor-pointer">
          ¿Tienes algún comentario adicional o sugerencia para mejorar mi
          portfolio?
          <textarea
            className="rounded resize-none p-2 my-2 w-full"
            cols="10"
            rows="5"
            placeholder="Respuesta"
          ></textarea>
        </label>

        <p>
          Si estás dispuesto a proporcionar información de contacto para futuras
          actualizaciones o para recibir más comentarios, por favor compártela{" "}
          <a className="underline" href="/#contacto">
            aqui
          </a>
        </p>
      </fieldset>

      <fieldset className="flex justify-end py-2">
        <button className="text-black text-center font-semibold text-sm bg-ea hover:bg-4 hover:text-white transition py-2 px-7 rounded-lg cursor-pointer">
          Enviar
        </button>
      </fieldset>
    </form>
  );
};

export default FeedbackForm;
