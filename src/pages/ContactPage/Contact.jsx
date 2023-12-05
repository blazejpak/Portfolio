import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Github from "../../UI/Github";
import Linkedin from "../../UI/Linkedin";
import FrontendMentor from "../../UI/FrontendMentor";

const Contact = () => {
  const formRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [isSending, setIsSending] = useState(false);
  const [sendMessage, setSendMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setIsSending(true);

    if (name && email && message) {
      emailjs
        .sendForm(
          "service_jvglrxh",
          "template_armgco3",
          formRef.current,
          "rioV8p19dEOh266w2"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSendMessage("Thank you for your message!");
          },
          (error) => {
            console.log(error.text);
            setSendMessage("Something went wrong, please try again. " + error);
          }
        )
        .finally(() => setIsSending(false));
    }
  };

  useEffect(() => {
    if (!name && isSubmit) setNameError(true);
    else setNameError(false);
    if (!email && isSubmit) setEmailError(true);
    else setEmailError(false);
    if (!message && isSubmit) setMessageError(true);
    else setMessageError(false);
  }, [isSubmit, name, email, message]);

  return (
    <main>
      <section className="contact">
        <div className="contact_info">
          <h2>Get in Touch</h2>
          <div>
            <p>
              I would love to hear about what you are working on and how I could
              help. I am currently looking for an intern or junior job. My
              preference would be to find a position in a company in Trójmiasto.
              But I am also happy to hear about opportunities that do not fit
              that description. Please feel free to check out my online profiles
              below and get in touch using the form.
            </p>
            <div className="contact_socials">
              <Github fill="#33323d" />
              <div className="contact_socials--fem">
                <FrontendMentor />
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="contact_info">
          <h2>Contact Me</h2>
          <form className="contact_form" ref={formRef} onSubmit={sendEmail}>
            <div className="contact_form--label-input">
              <label className="contact_form--label">Name</label>
              <input
                type="text"
                placeholder="Błażej Pakuła"
                className="contact_form--input"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (
                <p className="contact_form--error">This field is required</p>
              )}
            </div>
            <div className="contact_form--label-input">
              <label className="contact_form--label">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="contact_form--input"
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="contact_form--error">This field is required</p>
              )}
            </div>
            <div className="contact_form--label-input">
              <label className="contact_form--label">Message</label>
              <textarea
                type="text"
                placeholder="How can I help?"
                className="contact_form--message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
              {messageError && (
                <p className="contact_form--error">This field is required</p>
              )}
            </div>

            <div className="contact_form--submit-box">
              <input
                type="submit"
                value="send message"
                className="contact_form--button"
              />
              {isSending &&
              isSubmit &&
              (!nameError || !emailError || !messageError) ? (
                <p className="contact_form--button-mesage">
                  Sending message...
                </p>
              ) : null}
              {sendMessage && (
                <p className="contact_form--button-mesage">{sendMessage}</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
