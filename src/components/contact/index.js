import React from "react";
import { socialMediaLinks } from "../../portifolio";
import "./style.css";

export default function Contact() {
    const email = "https://formspree.io/" + socialMediaLinks.gmail;
    return (
        <div id="contact">
            <h2>Get in Touch</h2>
            <div id="contact-form">
                <form method="POST" action={email} >
                    <input type="hidden" name="_subject" value="Contact request from personal website" />
                    <input type="email" name="_replyto" placeholder="Your email" required/>
                        <textarea name="message" placeholder="Your message" required></textarea>
                        <button type="submit">Send</button>
                </form>
            </div>
            </div>
    );
}
