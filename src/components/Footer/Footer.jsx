import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: 'Expertise', href: '#!' },
    { name: 'Products', href: '#!' },
    { name: 'News & Updates', href: '/news' },
    { name: 'About Us', href: '/about-us' }
  ];

  const popularLinks = [
    { name: 'RF/Microwave Solutions', href: '/expertise/electronics/rf-and-microwave' },
    { name: 'Power Systems', href: '/expertise/electronics/power-systems' },
    { name: 'Embedded Systems', href: '/expertise/hardware/embedded-systems' },
    { name: 'RCIED Counter Jammers', href: '/products/product-jammers' },
    { name: 'Mobile App Development', href: '/expertise/software/mobile-app-development' }
  ];

  const connectLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Information Security Policy', href: '/information-security-policy' },
    { name: 'Terms of Use', href: '/terms-of-use' }
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Column 1: Explore */}
          <div className="footer__column">
            <h3 className="footer__column-title">Explore</h3>
            <ul className="footer__links">
              {exploreLinks.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <a href={link.href} className="footer__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: More Info For */}
          <div className="footer__column">
            <h3 className="footer__column-title">More Info For</h3>
            <ul className="footer__links">
              {popularLinks.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <a href={link.href} className="footer__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect with Us */}
          <div className="footer__column">
            <h3 className="footer__column-title">Connect with Us</h3>
            <ul className="footer__links">
              {connectLinks.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <a href={link.href} className="footer__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address & Contact */}
          <div className="footer__column">
            <h3 className="footer__column-title">Address</h3>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <div className="footer__contact-text">
                  <p>Office No. 123, Tech Plaza</p>
                  <p>Islamabad, Pakistan 44000</p>
                </div>
              </div>
              
              <div className="footer__contact-item">
                <span className="footer__contact-icon">@</span>
                <div className="footer__contact-text">
                  <a href="mailto:info@radcon.com.pk" className="footer__contact-link">
                    info@radcon.com.pk
                  </a>
                </div>
              </div>
              
              <div className="footer__contact-item">
                <span className="footer__contact-icon">☎</span>
                <div className="footer__contact-text">
                  <a href="tel:+92123456789" className="footer__contact-link">
                    +92 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 5: About Radcon */}
          <div className="footer__column footer__column--about">
            <div className="footer__logo">
              <img src="/images/radcon-logo.png" alt="RADCON" className="footer__logo-image" />
            </div>
            <div className="footer__about">
              <p className="footer__about-text">
                Pioneering innovation in defense and technology solutions since our inception. 
                RADCON delivers cutting-edge RF/microwave systems, embedded solutions, and 
                life-saving equipment to safeguard missions and empower technological advancement.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <div className="footer__copyright">
              <p>&copy; {currentYear} Radcon | Registered in Pakistan</p>
            </div>
            
            <div className="footer__legal">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a href={link.href} className="footer__legal-link">
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="footer__legal-separator">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
