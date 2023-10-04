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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      fetch("https://server-nglt-dev.fl0.io/jxse/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      setMessage({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border rounded-lg p-3 max-w-lg bg-black"
    >
      <fieldset className="border rounded-lg px-3 mb-3">
        <legend className="text-xs md:text-lg">Nombre:</legend>
        <input
          className="bg-black w-full mb-2"
          type="text"
          name="name"
          value={message.name}
          onChange={handleChangeInput}
        />
      </fieldset>

      <fieldset className="border rounded-lg px-3 mb-3 ">
        <legend className="text-xs md:text-lg">Email:</legend>
        <input
          className="bg-black w-full mb-2"
          type="email"
          name="email"
          value={message.email}
          onChange={handleChangeInput}
        />
      </fieldset>

      <fieldset className="border rounded-lg px-3 mb-3 ">
        <legend className="text-xs md:text-lg">Mensaje:</legend>
        <textarea
          className="bg-black w-full mb-2"
          onChange={handleChangeInput}
          value={message.message}
          name="message"
          id=""
          cols="30"
          rows="8"
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
