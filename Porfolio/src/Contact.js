import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:jayaranimanimaran13@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=Full Name: ${encodeURIComponent(formData.fullName)}%0D%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0A${encodeURIComponent(
      formData.message
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">
        Contact <span className="highlight">Me</span>
      </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-input"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="form-input"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="form-input"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
