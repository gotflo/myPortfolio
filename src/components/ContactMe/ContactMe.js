import React from 'react';
import './ContacteMe.css';
// import emailjs from "emailjs-com";
import { useForm, ValidationError } from '@formspree/react';
function ContactMe() {
  const [state, handleSubmit] = useForm("xjvlavjg");
  if (state.succeeded) {
      window.location.reload();
}
// const ContactMe = () => {
//     function sendEmail(e) {
//         e.preventDefault();
//         // emailjs.sendForm('service_yx8f8lf', 'template_ujv16lm', e.target, 'user_HEiUUCpd0fzj7qsyvZ7Yd').then(res => {
//         //     console.log(res);
//         // }).catch(err => console.log(err));
//         window.location.reload();
//     }
    return (
        <div className="contactMe" id="Mailer">
            <section id="contact-form">
                <form data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    onSubmit={handleSubmit}>
                    <div className="contact-left">
                        <h1 className="c-l-heading"><font className="contBorder">Contactez</font>-moi </h1>
                        <div className="f-name">
                            <font>Nom</font>
                            <input id='name' name='name' type="text" placeholder="Nom complet" />
                        </div>
                        <div className="f-email" >
                            <font htmlFor="email">Email</font>
                            <input id="email"
                                type="email" 
                                name="email" 
                                placeholder="Exemple@gmail.com" />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        {/* <div className='oki'>Message envoyer avec succès</div> */}
                    </div>

                    <div className="contact-right">
                        <div className="message">
                            <font>Message</font>
                            <textarea name="message" row="5" cols="20" placeholder="Ecrivez votre message..."></textarea>
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button type="submit" disabled={state.submitting}>ENVOYER</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactMe
