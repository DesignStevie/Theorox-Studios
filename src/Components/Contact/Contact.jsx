import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

function Contact() {
  const [isVerified, setVerification] = useState(false);

  function handleOnChange(value) {
    console.log("Captcha value: ", value);
    setVerification(true);
  }

  return (
    <form className="contactForm">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Type your message..." />

      {/* Live Site Key:6Ldag9YkAAAAADnI0JXGavhoYDsDlbSErwQguNtL 
      Localhost Site Key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI */}

      <ReCAPTCHA
        sitekey="6Ldag9YkAAAAADnI0JXGavhoYDsDlbSErwQguNtL"
        onChange={handleOnChange}
      />

      <button disabled={!isVerified} className="roundbutton primary-button">
        Send
      </button>
    </form>
  );
}
export default Contact;
