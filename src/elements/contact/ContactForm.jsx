import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  );
};
function ContactForm({ props }) {
  const [result, showresult] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cyobi0y", "template_4nbexqj", formRef.current, {
        publicKey: "D79JdTqxXVCcQBXL4",
      })
      .then(
        (result) => {
          showresult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <div className="rn-form-group">
        <input type="text" name="fullname" placeholder="Your Name" required />
      </div>

      <div className="rn-form-group">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>

      <div className="rn-form-group">
        <input type="text" name="phone" placeholder="Phone Number" required />
      </div>

      <div className="rn-form-group">
        <input type="text" name="subject" placeholder="Subject" required />
      </div>

      <div className="rn-form-group">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>

      <div className="rn-form-group">
        <button
          className="rn-button-style--2 btn-solid"
          type="submit"
          value="submit"
          name="submit"
          id="mc-embedded-subscribe"
        >
          Submit Now
        </button>
      </div>

      <div className="rn-form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactForm;
