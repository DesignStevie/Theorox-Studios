import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isVerified, setVerification] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
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
          console.log(result.text);
          console.log("Message Sent");
          setVerification(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("An Error has occured");
        }
      );
  };

  function handleOnChange(value) {
    setVerification(true);
  }

  return (
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
      <input placeholder="Name" type="text" name="user_name" />
      <input placeholder="Email" type="email" name="user_email" />
      <textarea placeholder="Type your message here..." name="message" />
      {/* 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
      6Ldag9YkAAAAADnI0JXGavhoYDsDlbSErwQguNtL*/}
      <ReCAPTCHA
        sitekey="6Ldag9YkAAAAADnI0JXGavhoYDsDlbSErwQguNtL"
        onChange={handleOnChange}
      />
      <div className="sendButtonContainer">
        <button
          type="submit"
          value="Send"
          disabled={!isVerified}
          className={
            isVerified
              ? "roundbutton primary-button sendButton "
              : "roundbutton disabled-button sendButton"
          }
        >
          Send
        </button>
      </div>
    </form>
  );
}
export default Contact;
