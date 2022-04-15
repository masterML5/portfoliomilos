import React from 'react'
import './contact.css'
import {MdMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'




let newElement = document.createElement('label');
newElement.id = 'poruka'
newElement.innerText='Uspesno ste poslali poruku';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yyr0mjm', 'template_erw6yre', form.current, 'KBdeFNgaXFZEDMx6U')
      
    e.target.reset()
    
    document.querySelector('form').appendChild(newElement);   
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>milosjelic98@gmail.com</h5>
            <a href="mailto:milosjelic98@gmail.com">Send a message</a>     
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Milos Jelic</h5>
            <a href="https://m.me/masterML5" target="_blank" rel='noreferrer'>Send a message</a>     
          </article>
          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Milos Jelic</h5>
            <a href="https://api.whatsapp.com/send?phone=+381614819611" target="_blank" rel='noreferrer'>Send a message</a>     
          </article>
          </div>
          {/*end*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='name' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <label id='poruka'></label>
        </form>
      
      </div>
      
    </section>
  )
}

export default Contact