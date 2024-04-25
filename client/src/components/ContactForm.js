import { React, useState, useEffect, useCallback } from "react";
import Button from "./Button";
import axios from "axios";

const ContactForm = ({color}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState("");

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await axios.post(
        "https://portfolio-website-teal-nine.vercel.app/send-message",
        { name, email, message }
      );
      setSubmissionResult("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSubmissionResult("error");
    }

    setIsSubmitting(false);
  }, [name, email, message]);

  useEffect(() => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", handleSubmit);
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [handleSubmit]);
  return (
    <div className=" flex flex-col w-full  md:w-1/2 bg-black rounded-xl">
      <form
        id="contact-form"
        action="submit"
        className="flex flex-col items-center gap-4 p-4"
      >
        <div className="flex flex-col  w-full ">
          <label htmlFor="name" className="text-xl font-palanquin">
            Name :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" p-2 outline-none bg-primary-black text-primary-white rounded-md"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-xl font-palanquin">
            Email :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" p-2 outline-none bg-primary-black text-primary-white rounded-md"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message" className="text-xl font-palanquin">
            Message :
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="22"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none outline-none bg-primary-black text-primary-white rounded-md"
          />
        </div>
        <Button color={color} type="submit" openInNewTab={false}>{isSubmitting ? "Sending..." : "Send"}</Button>
        {submissionResult === "success" && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {submissionResult === "error" && (
          <p className="error-message">An error occurred. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
