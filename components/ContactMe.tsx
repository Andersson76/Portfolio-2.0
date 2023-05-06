import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:martin.andersson@me.com?subject=${formData.subject}&body=
    Hi my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      {/* <h3 className=" top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3> */}

      <div className="flex flex-col space-y-6 pt-20">
        <h4 className="text-2xl mt-20 flex top-24 justify-center font-semibold text-center underline decoration-[#F7AB0A]/50">
          Lets talk
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-t animate-bounce" />
            <p className="text-2xl">+46 73 588 01 88</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-t animate-pulse" />
            <p className="text-2xl">martin.andersson@me.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-t" />
            <p className="text-2xl">Gothenburg, Sweden</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[250px]  mx-auto pb-40"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="text"
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput hidden sm:block w-[250px]"
            type="email"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe