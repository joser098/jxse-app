"use client";
import { useAlerts } from "@/hooks/useAlerts";
import { URL_BASE } from "@/services/constants";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { render, renderAlert, SuccessAlert } = useAlerts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      fetch(`${URL_BASE}/jxse/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => console.log(res));

      reset();
      renderAlert();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col border rounded-lg p-3 max-w-lg bg-black w-full"
      >
        <fieldset className="border rounded-lg px-3 mb-3">
          <legend className="text-xs md:text-lg">
            Nombre:{" "}
            {errors.name && (
              <span className=" text-red-500 text-xs md:text-sm">
                {errors.name.message}
              </span>
            )}
          </legend>
          <input
            className="bg-black w-full mb-2"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "es requerido",
              },
              minLength: {
                value: 3,
                message: "debe tener minimo tres caracteres",
              },
              maxLength: {
                value: 20,
                message: "debe tener maximo veinte caracteres",
              },
            })}
          />
        </fieldset>

        <fieldset className="border rounded-lg px-3 mb-3 ">
          <legend className="text-xs md:text-lg">
            Email:{" "}
            {errors.email && (
              <span className=" text-red-500 text-xs md:text-sm">
                {errors.email.message}
              </span>
            )}
          </legend>
          <input
            className="bg-black w-full mb-2"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "es requerido",
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "no es valido",
              },
            })}
          />
        </fieldset>

        <fieldset className="border rounded-lg px-3 mb-3 ">
          <legend className="text-xs md:text-lg">
            Mensaje:{" "}
            {errors.message && (
              <span className=" text-red-500 text-xs md:text-sm">
                {errors.message.message}
              </span>
            )}
          </legend>
          <textarea
            className="bg-black w-full mb-2"
            cols="30"
            rows="8"
            {...register("message", {
              required: {
                value: true,
                message: "es requerido",
              },
              minLength: {
                value: 10,
                message: "Debe tener minimo diez caracteres",
              },
            })}
          ></textarea>
        </fieldset>

        <fieldset className="flex justify-end py-2">
          <button className="text-black text-center font-semibold text-sm bg-ea hover:bg-4 hover:text-white transition py-2 px-7 rounded-lg cursor-pointer">
            Enviar
          </button>
        </fieldset>
      </form>
      {render && (
        <SuccessAlert
          title="Mensaje enviado con éxito!"
          description="Se ha enviado un correo con información detallada a la dirección que has proporcionado."
        />
      )}
    </>
  );
};

export default ContactForm;
