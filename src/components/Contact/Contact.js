import './Contact.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Animate from '../Animate/Animate';

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
                    alert('Message Sent Successfully!');
                    nameRef.current.value = '';
                    emailRef.current.value = '';
                    messageRef.current.value = '';
                },
                (error) => {
                    alert('Failed to send message, please try again later.');
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='contact-block'>
            <div className='contact-container'>
                <h1 className='contact-title'>
                    <Animate letterClass={letterClass} strArray={titleArray} index={0} />
                </h1>
                
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <div className='form-group'>
                        <label htmlFor="user_name">Name</label>
                        <input 
                            type="text" 
                            id="user_name"
                            name="user_name" 
                            ref={nameRef}
                            placeholder="Your full name"
                            required
                        />
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor="user_email">Email</label>
                        <input 
                            type="email" 
                            id="user_email"
                            name="user_email" 
                            ref={emailRef}
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message"
                            name="message" 
                            ref={messageRef}
                            placeholder="Share your thoughts, questions, or project ideas..."
                            rows="6"
                            required
                        />
                    </div>
                    
                    <button className='send-button' type="submit">
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact