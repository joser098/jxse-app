"use client";
import { useAlerts } from "@/hooks/useAlerts";
import {
  calificationOptions,
  countries,
  itKnowledge,
  satisfactionOptions,
} from "@/services/constants";
import { useForm, Controller } from "react-hook-form";

const FeedbackForm = () => {
  const { render, renderAlert, SuccessAlert } = useAlerts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch(
        "https://server-nglt-dev.fl0.io/jxse/survey",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      renderAlert();
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-4xl flex flex-col border rounded-lg bg-black p-3 text-sm md:text-base"
    >
      <fieldset className="border rounded-lg px-3 mb-3 flex flex-col gap-3 py-2">
        <legend>Algunos datos*</legend>
        <label className="cursor-pointer">
          Edad:
          <input
            className="rounded mx-2 w-10"
            type="number"
            {...register("age", {
              required: {
                value: true,
                message: "Edad es requerido",
              },
              minLength: {
                value: 1,
              },
              maxLength: {
                value: 2,
              },
            })}
          />
          {errors.age && (
            <span className="block sm:inline text-red-500 text-xs md:text-sm">
              {errors.age.message}
            </span>
          )}
        </label>

        <label className="cursor-pointer">
          País:
          <select
            className="rounded mx-2 p-1"
            name="countries"
            {...register("country", {
              required: {
                value: true,
                message: "Selecciona un país",
              },
              validate: {
                valueSelected: (value) => {
                  return value !== "0" || "Selecciona un país";
                },
              },
            })}
          >
            {countries.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
          {errors.country && (
            <span className="block sm:inline text-red-500 text-xs md:text-sm">
              {errors.country.message}
            </span>
          )}
        </label>

        <label className="cursor-pointer">
          Conocimientos de desarrollo web:
          <select
            className="rounded sm:mx-2 p-1 my-1 cursor-pointer"
            name="it"
            {...register("itLevel", {
              required: {
                value: true,
                message: "Selecciona una opción",
              },
              validate: {
                valueSelected: (value) => {
                  return value !== "0" || "Selecciona una opción";
                },
              },
            })}
          >
            {itKnowledge.map((level) => {
              return (
                <option key={level.id} value={level.id}>
                  {level.description}
                </option>
              );
            })}
          </select>
          {errors.itLevel && (
            <span className="block sm:inline text-red-500 text-xs md:text-sm">
              {errors.itLevel.message}
            </span>
          )}
        </label>
      </fieldset>

      <fieldset className="border rounded-lg px-3 mb-3 flex flex-col gap-3 py-2">
        <legend>Portfolio*</legend>
        <span>¿Has visitado mi portfolio anteriormente?</span>

        <div className="flex items-center gap-7 mb-2">
          <label className="bg-3 p-2 flex gap-1 rounded cursor-pointer">
            Si
            <input
              type="radio"
              name="seenBefore"
              value="Si"
              {...register("seen", {
                required: {
                  value: true,
                  message: "Selecciona una opción",
                },
              })}
            />
          </label>

          <label className="bg-3 p-2 flex gap-1 rounded cursor-pointer">
            No
            <input
              type="radio"
              name="seenBefore"
              value="No"
              {...register("seen")}
            />
          </label>
          {errors.seen && (
            <span className="block sm:inline text-red-500 text-xs md:text-sm">
              {errors.seen.message}
            </span>
          )}
        </div>

        <Controller
          name="impressCalification"
          control={control}
          defaultValue={5}
          rules={{
            required: {
              value: true,
              message: "Debes dejar una calificacion",
            },
          }}
          render={({ field }) => (
            <label className="my-3 cursor-pointer">
              En una escala del 1 al 10, ¿cómo calificarías la impresión general
              de mi portfolio?{" "}
              <span className="text-[10px] block">
                (1 siendo la peor puntuación y 10 la mejor)
              </span>
              <input
                className="w-full mt-2"
                type="range"
                min="1"
                max="10"
                {...field}
              />
              <p>
                Tu puntuación:{" "}
                <span
                  className={
                    field.value < 4
                      ? "text-red-700"
                      : field.value >= 4 && field.value < 8
                      ? "text-orange-500"
                      : "text-green-700"
                  }
                >
                  {field.value}
                </span>
              </p>
            </label>
          )}
        />

        <label className="mb-3 cursor-pointer">
          ¿Qué opinas sobre el diseño y la navegación de mi portfolio?
          <select
            className="rounded sm:mx-2 my-1 block p-1"
            name="opinion"
            {...register("opinion", {
              required: {
                value: true,
                message: "Tu opinion es importante",
              },
              validate: {
                valueSelected: (value) => {
                  return value !== "0" || "Tu opinion es importante";
                },
              },
            })}
          >
            {satisfactionOptions.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.description}
                </option>
              );
            })}
          </select>
          {errors.opinion && (
            <span className="block sm:inline text-red-500 text-xs md:text-sm sm:pl-2">
              {errors.opinion.message}
            </span>
          )}
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
            {...register("projectsCalification")}
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
            {...register("relevant")}
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
            {...register("improveOrFeature")}
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
            {...register("suggestions")}
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
      {render && (
        <SuccessAlert
          title="Enviado con éxito!"
          description="Gracias por tu valiosa opinion."
        />
      )}
    </form>
  );
};

export default FeedbackForm;
