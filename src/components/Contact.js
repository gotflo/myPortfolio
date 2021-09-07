import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";
const Contact = () => {
    return (
        <div className="contact">
            <div className="containerAA">
                <div className="contactSection">
                    <div className="row justifyConter">
                        <div className="col6">
                            <div className="contactSection-logo">
                                <img src="/images/logo.png" alt="" />
                            </div>
                            <div className="mot_fin">
                                Copyright © 2021 Gotflo | +228 93 47 17 03
                            </div>
                            <ul className="contactCircles">
                                <a className="iconn" href="https://www.facebook.com/komlagotliebe.akpa">
                                    <li>
                                        <FaFacebookF className="contactIcon" />
                                    </li>
                                </a>
                                <a className="iconn" href="https://twitter.com/FlorentGotliebe" >
                                    <li>
                                        <FaTwitter className="contactIcon" />
                                    </li>
                                </a>
                                <a className="iconnw" href="https://wa.me/22893471703" >
                                    <li>
                                        <FaWhatsapp className="contactIcon" />
                                    </li>
                                </a>
                                <a className="iconn" href="https://www.instagram.com/invites/contact/?i=388k4lv5xast&utm_content=1zey5mf" >
                                    <li>
                                        <FaInstagram className="contactIcon" />
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
