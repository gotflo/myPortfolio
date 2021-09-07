import emailjs from "emailjs-com";
import React from "react";
//import im from "../images/Lawrencium.jpg";
const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_yx8f8lf', 'template_ujv16lm', e.target, 'user_HEiUUCpd0fzj7qsyvZ7Yd').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className="container__border" id="Mailer" >
            <h1 className="Contactez-moi">Contactez-moi</h1>
            <form className="forme" onSubmit={sendEmail}>
                <label>Nom</label>
                <input type="text" name="Entrez votre nom" className="form-control" />

                <label>Email</label>
                <input type="email" name="Entrez votre nom" className="form-control imp" />

                <label>Message</label>
                <textarea name="message" rows="5" className="form-control" />
                <input type="submit"
                    value="ENVOYER"
                    className="form-control btn1 btn-primary"
                    style={{ marginTop: "1px" }} />
            </form>
        </div>
    );
};

export default Mailer;
