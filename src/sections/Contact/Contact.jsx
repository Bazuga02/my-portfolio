import React, { useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:abhirai5515@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
      message
    )}%0A%0AFrom: ${name}%0AEmail: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className=" text-3xl">
        Contact
        <p>Get in touch!</p>
      </h1>

      <form onSubmit={handleSubmit} className="wwe">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
          className=" p-2"
            name="message"
            id="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
