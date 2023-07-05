import React, { useState } from 'react';
import './styles/Contact.css'; // Import the CSS file


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let res= await fetch("http://localhost:3001/api/contactus",{method:"POST", headers: {
        'Content-Type': 'application/json'
      },body:JSON.stringify({
        name,
        email,
        message
      })});
      if(res.status===200){

        setName("");
        setEmail("");
        setMessage("");
      }else {
        console.log("Error");
      }
    }catch(err){
      console.log(err);
    }
  
   };

  return (
    <div>
      <main>
        <section className="contact">
          <h1 className="fade-in-down" style={{ animationDelay: '0.5s', animationName: 'fadeInDown' }}>Contact Us</h1>

          <div className="contact-info">
            <div className="contact-details fade-in-down" style={{ animationDelay: '1s', animationName: 'fadeInDown' }}>
              <h2>Get in Touch</h2>
              <p>If you have any questions or feedback, feel free to contact us.</p>
              <p>We would love to hear from you!</p>
            </div>

            <div className="contact-form fade-in-down" style={{ animationDelay: '1.5s', animationName: 'fadeInDown' }}>
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button type="submit" id="submit-btn">Send</button>
              </form>
            </div>
          </div>

          <div className="contact-social fade-in-down" style={{ animationDelay: '2s', animationName: 'fadeInDown' }}>
            <div className="social-icons">
              <a href="https://www.facebook.com/"><img src=".styles/images/facebook.png" alt="Facebook" /></a>
              <a href="https://twitter.com/i/flow/login"><img src="./styles/images/twitter.png" alt="Twitter" /></a>
              <a href="https://www.instagram.com/"><img src=".styles/images/instagram.png" alt="Instagram" /></a>
              <a href="https://www.linkedin.com/"><img src=".styles/images/linkedin.png" alt="LinkedIn" /></a>
            </div>
            <h2 className="fade-in-down" style={{ animationDelay: '2.5s', animationName: 'fadeInDown' }}>Connect with Us</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;