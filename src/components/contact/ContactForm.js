import React from "react";

function ContactForm(props) {
  return (
    <div className="right col-md-8 col-xs-12">
      <h3>Fill the form now</h3>
      <form action="post.php" name="contact" method="post">
        <input type="text" placeholder="Your Name" name="name" />
        <input type="email" placeholder="Your Email" name="email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send Email" className="btn" name="submit" />
      </form>
    </div>
  );
}

export default ContactForm;
