import React, { useContext, useRef, useState } from "react";

import { images } from '../../constants';
import emailjs from "@emailjs/browser";
import './Footer.scss';


const Footer = () => {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '',});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();


  const { user_name, user_email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };

      emailjs
      .sendForm(
        "service_ljjjpmb",
        "template_3wg7gad",
        form.current,
        "user_gwH6NxrAEhvpnHGFeieoT"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmitted(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
 <h2 className="head-text" id="contact">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:oumarfilston@gmail.com" className="p-text">oumarfilston@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+233504576123" className="p-text">+233504576123</a>
        </div>
      </div>     
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
            <form ref={form} onSubmit={handleSubmit}>

          <div className="app__flex">

            <input className="p-text" type="text" placeholder="Your Name" name="user_name" required value={user_name} onChange={handleChangeInput} />

          </div>

          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="user_email" required value={user_email} onChange={handleChangeInput} />

          </div>

          <div>
            <textarea
              className="p-text"
              required
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />

          </div>

          <button type="submit" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
          </form>
        </div>
      ) : (
        <div>
          <p className="email_success">
            Thank you for getting in touch!
          </p>
        </div>
      )}
    </>
  );
};

export default Footer
