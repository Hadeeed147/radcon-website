// ContactUs.jsx
import React, { useState } from 'react';
import PageHero from '../components/sections/PageHero/PageHero';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setFormStatus('Thank you for your message. We will get back to you soon!');
    setTimeout(() => setFormStatus(''), 5000);
    
    // Send email to aamir@radcontechs.com.com
    const mailtoLink = `mailto:aamir@radcontechs.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  const contactInfo = {
    address: 'Plot no 1, Sheikh chowk, KRL road, Rawalpindi, Pakistan',
    phone: '+92 333 5686224',
    fax: '+92 51 8772272',
    email: 'aamir@radcontechs.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
  };

  return (
    <main className="contact-page" id="main-content">
      <PageHero
        title="Contact Us"
        backgroundImage="/images/contact-hero.webp"
        overlay={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <section className="contact-content">
        <div className="container">
          <div className="contact-intro">
            <h2 className="contact-intro__title">
              Let's Build <span className="contact-intro__highlight">Tomorrow's Technology</span> Together
            </h2>
            <p className="contact-intro__description">
              Whether you need innovative embedded systems, cutting-edge software solutions, or technical consultation, 
              our team is ready to transform your vision into reality. Reach out to us today and discover how RADCON 
              Technologies can drive your success forward.
            </p>
          </div>

          <div className="contact-main">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <div className="contact-form-card">
                  <h3 className="contact-form__title">Send Us a Message</h3>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 300 1234567"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company Name"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="embedded-systems">Embedded Systems</option>
                        <option value="rf-microwave">RF & Microwave Solutions</option>
                        <option value="software-development">Software Development</option>
                        <option value="power-systems">Power Systems</option>
                        <option value="pcb-design">PCB Design</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    {formStatus && (
                      <div className="form-status form-status--success">
                        {formStatus}
                      </div>
                    )}

                    <button type="submit" className="btn btn--primary btn--full">
                      Send Message
                      <span className="btn__icon">→</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="contact-info-wrapper">
                <div className="contact-info-card">
                  <h3 className="contact-info__title">Get in Touch</h3>
                  
                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="contact-info__content">
                      <h4>Office Address</h4>
                      <p>{contactInfo.address}</p>
                    </div>
                  </div>

                                     <div className="contact-info__item">
                     <div className="contact-info__icon">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
                       </svg>
                     </div>
                     <div className="contact-info__content">
                       <h4>Phone Number</h4>
                       <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                     </div>
                   </div>

                   <div className="contact-info__item">
                     <div className="contact-info__icon">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M22 3H2l8 9.46V19l4-2v-8.54L22 3z" stroke="currentColor" strokeWidth="2"/>
                       </svg>
                     </div>
                     <div className="contact-info__content">
                       <h4>Fax Number</h4>
                       <p><a href={`tel:${contactInfo.fax}`}>{contactInfo.fax}</a></p>
                     </div>
                   </div>

                   <div className="contact-info__item">
                     <div className="contact-info__icon">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                         <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                       </svg>
                     </div>
                     <div className="contact-info__content">
                       <h4>Email Address</h4>
                       <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                     </div>
                   </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="contact-info__content">
                      <h4>Business Hours</h4>
                      <p>{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>

                                 <div className="quick-contact-cards">
                   <div className="quick-contact-card">
                     <div className="quick-contact-card__icon">
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                         <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2"/>
                         <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                         <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="2"/>
                       </svg>
                     </div>
                     <h4>Career Opportunities</h4>
                     <p>Join our innovative team</p>
                     <a href="/careers" className="quick-contact-card__link">View Openings →</a>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="contact-map-section">
            <h3 className="contact-map__title">Find Us on Map</h3>
                         <div className="contact-map-wrapper">
               <iframe
                 className="contact-map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.9845853893577!2d73.1224858!3d33.6138867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95bd2b66d7dd%3A0x6421c5f196bd1b9b!2sRadcon%20Technologies%20pvt%20limited!5e0!3m2!1sen!2s!4v1635959880000!5m2!1sen!2s"
                 width="100%"
                 height="450"
                 style={{ border: 0 }}
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="RADCON Technologies Office Location"
               />
             </div>
             <div className="map-directions">
               <a 
                 href="https://www.google.com/maps/dir//Radcon+Technologies+pvt+limited+Suite+DF-1+Midcity+Appartments+Azeem+Town,+Islamabad,+44000/@33.6138867,73.1224858,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x38df95bd2b66d7dd:0x6421c5f196bd1b9b" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn btn--secondary"
               >
                 Get Directions
                 <span className="btn__icon">↗</span>
               </a>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;