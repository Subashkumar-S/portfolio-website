import React from "react";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

const Contact = ({ color }) => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen px-[10vw] lg:px-[20vw] py-[10vh] bg-dark-blue text-primary-white flex flex-col z-10"
    >
      <h2 className="text-center text-4xl font-montserrat font-bold">
        <span style={{ color }}>Contact</span> Me
      </h2>
      <h3 className="text-center text-2xl font-semibold font-palanquin">
        Get In Touch
      </h3>

      <div className="flex flex-col items-center justify-center gap-8 md:flex-row flex-1 max-w-7xl">
        <ContactDetails />
        <ContactForm color={color} />
      </div>
    </section>
  );
};

export default Contact;