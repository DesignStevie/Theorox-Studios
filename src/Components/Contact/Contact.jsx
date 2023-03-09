import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../Toast/Toast";
// import { config } from "dotenv";

function Contact() {
  const [isVerified, setVerification] = useState(false);
  const [showNotification, setNotification] = useState(false);
  const [properties, setProperties] = useState(null);

  const form = useRef();

  // const configCall = new config();
  console.log(process.env.REACT_APP_PUBLIC_RECAPTCHA_SITE_KEY);

  let notificationDetails = null;

  const captchOnChange = (response) => {
    console.log("Captcha value: ", response);
    setVerification(true);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isVerified) {
      const isHuman = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          body: `secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}`,
        }
      )
        .then((res) => res.json())
        .then((json) => json.success)
        .catch((err) => {
          throw new Error(`Error in Google Siteverify API. ${err.message}`);
        });
      if (isHuman) {
        emailjs
          .sendForm(
            "service_j8t8zs7",
            "template_cbvmg52",
            form.current,
            "M2UGuPl9NZ5edBLv6"
          )
          .then(
            (result) => {
              // Message Sent
              window.grecaptcha.reset();
              e.target.reset();
              setVerification(false);
              successNotification();
            },
            (error) => {
              // Message Failed
            }
          );
      } else {
        console.log("you are not Human");
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
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" type="text" name="user_name" />
        <input placeholder="Email" type="email" name="user_email" />
        <textarea placeholder="Type your message here..." name="message" />

        <ReCAPTCHA
          sitekey={process.env.REACT_APP_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={captchOnChange}
        />

        <div className="sendButtonContainer">
          <button
            id="submit"
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
      <Toast show={showNotification} details={properties} />
    </>
  );
}
export default Contact;
