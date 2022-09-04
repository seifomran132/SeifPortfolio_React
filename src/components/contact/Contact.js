import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

import '../../style/css/contact.css'

function Contact(props) {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-heading">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-us">
          <div className="row">
            <ContactDetails/>
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
