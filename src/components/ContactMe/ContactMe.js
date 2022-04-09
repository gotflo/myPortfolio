import React from 'react';
import './ContacteMe.css';
import emailjs from "emailjs-com";


const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_yx8f8lf', 'template_ujv16lm', e.target, 'user_HEiUUCpd0fzj7qsyvZ7Yd').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className="contactMe" id="Mailer">
            <section id="contact-form">
                <form data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    onSubmit={sendEmail}>
                    <div className="contact-left">
                        <h1 className="c-l-heading"><font className="contBorder">Contactez</font>-moi </h1>
                        <div className="f-name">
                            <font>Nom</font>
                            <input type="text" placeholder="Nom complet" />
                        </div>
                        <div className="f-email">
                            <font>Email</font>
                            <input type="email" placeholder="Exemple@gmail.com" />
                        </div>
                    </div>

                    <div className="contact-right">
                        <div className="message">
                            <font>Message</font>
                            <textarea name="message" row="5" cols="20" placeholder="Ecrivez votre message..."></textarea>

                        </div>
                        <button type="submit">ENVOYER</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactMe
