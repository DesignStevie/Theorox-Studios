import "./Contact.css";

function Contact() {
  return (
    <form className="contactForm">
        <input type='text' placeholder="Name" />
        <input type='email' placeholder="Email" />
        <textarea placeholder="Type your message..." />
        <button className="roundbutton primary-button">Send</button>
    </form>
  )
}
export default Contact;