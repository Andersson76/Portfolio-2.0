import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const sendEmail = (values: Inputs) => {
    console.log("Sending the following values:", values);
    emailjs
      .send(
        "service_e8sjzfs", // replace with your service ID
        "template_6p3yep6", // replace with your template ID
        values, // make sure this object contains { name, email, message }
        "L_YpGK_acTY0KRA5S" // replace with your user ID
      )
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email.", error);
        alert("Failed to send message");
      });
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          message: Yup.string().required("Required"), // make sure message is required
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          sendEmail(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex flex-col space-y-6 pb-36 pt-20 mb-16 mt-10 w-full max-w-md md:w-1/2">
            <h4 className="text-2xl mt-20 flex justify-center font-semibold text-center underline decoration-[#F7AB0A]/50">
              Let&apos;s talk
            </h4>

            <div className="space-y-2">
              <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-bounce" />
                <p className="text-2xl">+46 73 588 01 88</p>
              </div>

              <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                <p className="text-2xl">martin.andersson@me.com</p>
              </div>

              <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#F7AB0A] h-7 w-t" />
                <p className="text-2xl">Gothenburg, Sweden</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <label htmlFor="Name" className="text-left">
                {" "}
                Name
              </label>
              <Field type="text" name="name" className="contactInput" />
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm mt-1">
                  <ErrorMessage name="name" />
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-4">
              <label htmlFor="email" className="text-left">
                Email
              </label>
              <Field type="email" name="email" className="contactInput" />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">
                  <ErrorMessage name="email" />
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <label htmlFor="message" className="text-left">
                Message
              </label>
              <Field as="textarea" name="message" className="contactInput" />
              {errors.message && touched.message && (
                <div className="text-red-500 text-sm mt-1">
                  <ErrorMessage name="message" />
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactMe;
