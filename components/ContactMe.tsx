import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:david.forero1813@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contacto
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Tengo justo lo que necesitas{" "}
          <span className="decoration-[#0099ff]/50 underline">
            Vamos a hablar
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0099ff] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+584128019009</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0099ff] h-7 w-7 animate-pulse" />
            <p className="text-2xl">david.forero1813@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#0099ff] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Los Teques</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
        <div className="flex space-x-2">
          <input type="text" {...register('name')} placeholder="Nombre" className="contactInput" />
          <input type="email" {...register('email')} placeholder="Correo" className="contactInput" />
        </div>

        <input type="text" placeholder="Tema"  {...register('subject')} className="contactInput" />

        <textarea className="contactInput"  {...register('message')} placeholder="Mensaje"></textarea>

        <button className="bg-[#0099ff] py-5 px-10 rounded-md text-black font-bold text-lg">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
