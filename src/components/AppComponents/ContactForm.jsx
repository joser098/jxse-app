"use client";
import { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  return (
    <form className="flex flex-col border rounded-lg p-3 max-w-lg bg-black">
      <fieldset className="border rounded-lg px-3 mb-3">
        <legend className="text-sm md:text-lg">Nombre:</legend>
        <input
          className="bg-black w-full mb-2"
          type="text"
          name="name"
          value={message.name}
          onChange={handleChangeInput}
        />
      </fieldset>

      <fieldset className="border rounded-lg px-3 mb-3 ">
        <legend className="text-sm md:text-lg">Email:</legend>
        <input
          className="bg-black w-full mb-2"
          type="email"
          name="email"
          value={message.email}
          onChange={handleChangeInput}
        />
      </fieldset>

      <fieldset className="border rounded-lg px-3 mb-3 ">
        <legend className="text-sm md:text-lg">Mensaje:</legend>
        <textarea
          className="bg-black w-full mb-2"
          onChange={handleChangeInput}
          value={message.message}
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </fieldset>

      <fieldset className="flex justify-end py-2">
        <button className="text-black text-center font-semibold text-sm bg-ea hover:bg-4 hover:text-white transition py-2 px-7 rounded-lg cursor-pointer">
          Enviar
        </button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
