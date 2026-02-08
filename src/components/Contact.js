import React from "react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
         <h2 className="section-title">Contact:</h2>
        <div className="row">

        </div>
      </div>
     
      <div className="contact-container">
  
        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="info-box">
            <div className="icon">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div>
              <h4>Address</h4>
              <p>Sujanpur(Pathankot),Punjab, Pin-code:145023</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <i className="bi bi-telephone"></i>
            </div>
            <div>
              <h4>Call Us</h4>
              <a
  href="tel:+6239736671"
  className="text-decoration-none"
>
              <p>6239736671</p></a>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">
              <i className="bi bi-envelope"></i>
            </div>
            <div>
              <h4>Email Us</h4>
              <a
  href="mailto:aryaankush205@gmail.com"
  className="text-decoration-none"
>
              <p>aryaankush205@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.7319669870913!2d75.55205183784022!3d32.31905392638574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7992bf85f1b3%3A0xcd8f0580f2e9f63a!2sBhool%20Chack%20Kullian%2C%20Punjab%20145023!5e0!3m2!1sen!2sin!4v1770458399671!5m2!1sen!2sin"
    width={600}
    height={450}
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mqedkqwy"
            method="POST"
          >

            {/* Hidden options */}
            <input type="hidden" name="_subject" value=" Portfolio Contact" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
