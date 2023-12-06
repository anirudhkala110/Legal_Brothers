import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6cywveg', 'template_7rfedib', form.current, 'dvdh1BKhBwZ1IdY5y')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent Successful")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='bg-light min-vh-100' >
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mobile</label>
      <input type="number" name="user_phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Home