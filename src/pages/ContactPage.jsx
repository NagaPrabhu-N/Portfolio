import { useRef } from "react";
import emailjs from "emailjs-com";
import "./../css/contact.css";

function ContactPage({ theme }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uxpb7w4",
        "template_l8ahl2e",
        formRef.current,
        "9y1E6KcvUJ2c7sNuv"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <section className={`contact-section ${theme}`}>
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1>
            Let's create something <br />
            <span>awesome together.</span>
          </h1>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required placeholder="Enter your name.." />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required placeholder="Enter your mail.." />
          </div>

          <div className="form-group">
            <label>Your idea</label>
            <textarea name="message" rows="5" required />
          </div>

          <button type="submit" className="contact-btn">
            Submit
          </button>

          <p className="contact-note">
            I usually respond to emails within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
