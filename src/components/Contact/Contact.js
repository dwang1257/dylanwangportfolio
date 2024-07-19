import './Contact.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Animate from '../Animate/Animate';
import pic from '../../assets/images/IMG_9587.jpg';
const Contact = () => {
    const form = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const titleArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_401qn94', 'template_5bxjarj', form.current, {
        publicKey: 'BXYjg9fl-o3kFFePp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          nameRef.current.value= '';
          emailRef.current.value = '';
          messageRef.current.value = '';
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div className='contact-block'>
            <h1 className='contact-title'><Animate letterClass = {letterClass} strArray = {titleArray} index = {0}/></h1>
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" ref = {nameRef} />
            <label>Email</label>
            <input type="email" name="user_email" ref = {emailRef} />
            <label>Message</label>
            <textarea name="message" ref = {messageRef} />
            <input className='send-button' type="submit" value="Send" />
            </form>
            <img className = 'my-pic' src={pic} alt = 'picture' />
        </div>
    )
}

export default Contact