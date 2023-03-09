import "./Contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../Toast/Toast";

function Contact() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmaiLValid] = useState(false);
  const [isValid, setValidation] = useState(false);

  const [showNotification, setNotification] = useState(false);
  const [properties, setProperties] = useState(null);

  const form = useRef();

  let notificationDetails = null;

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j8t8zs7",
        "template_cbvmg52",
        form.current,
        "M2UGuPl9NZ5edBLv6"
      )
      .then(
        (result) => {
          e.target.reset();
          successNotification();
        },
        (error) => {
          // Message Failed
        }
      );
  };

  const validateInputs = () => {
    if (nameValid && emailValid) {
      setValidation(true);
      console.log(isValid);
    } else {
      console.log("Name: ", nameValid, " Email: ", emailValid);
    }
  };

  const nameEntered = (event) => {
    setInputName(event.target.value);

    if (inputName !== "" && inputName !== " ") {
      setNameValid(true);
      validateInputs();
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const emailEntered = (event) => {
    setInputEmail(event.target.value);

    if (inputEmail !== "" && inputEmail !== " ") {
      if (isValidEmail(inputEmail)) {
        console.log("email is valid");
        setEmaiLValid(true);
        validateInputs();
      } else {
        setEmaiLValid(false);
      }
    }
  };

  const successNotification = () => {
    notificationDetails = {
      title: "Message Sent",
      description:
        "Thank you for your message, I aim to get back to you as soon as I possible.",
    };

    setProperties(notificationDetails);
    setNotification(true);
  };

  return (
    <>
      <form
        autoComplete="off"
        className="contactForm"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          autoComplete="false"
          placeholder="Name"
          type="text"
          name="user_name"
          onChange={nameEntered}
          value={inputName}
        />
        <input
          autoComplete="false"
          placeholder="Email"
          type="email"
          name="user_email"
          onChange={emailEntered}
          value={inputEmail}
        />
        <textarea placeholder="Type your message here..." name="message" />
        <div className="sendButtonContainer">
          <button
            type="submit"
            value="Send"
            disabled={!isValid}
            className={
              isValid
                ? "roundbutton primary-button sendButton "
                : "roundbutton disabled-button sendButton"
            }
          >
            Send
          </button>
        </div>
      </form>
      <Toast show={showNotification} details={properties} />
    </>
  );
}
export default Contact;
