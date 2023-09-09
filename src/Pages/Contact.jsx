import React from "react";
import "../AllCss/Contact.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <section className="Contact">
      <div className="ContactContainer">
        <div className="ContactTitle">
          <h2>CONTACT US</h2>
        </div>
      </div>
      <div className="lrinfo">
        <form id="contact-form">
          <input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            required
          />

          <input
            placeholder="E-mail"
            type="email"
            id="email"
            name="email"
            required
          />

          <textarea
            placeholder="Text......"
            id="message"
            name="message"
            rows="9"
            required
          ></textarea>

          <button className="submit" type="submit">
            Send
          </button>
        </form>
        <div className="othercontact">
          <h1>Other Contact</h1>
          <div><WhatsAppIcon style={{fontSize: "40px"}}/> <h2>0241597506</h2></div>
          <div><InstagramIcon style={{fontSize: "40px"}} /> <h2>Local_Rest</h2> </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
