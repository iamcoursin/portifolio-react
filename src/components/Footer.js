import React from "react";
import "../styles/Footer.css";
import ReactWhatsapp from "react-whatsapp";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          className="contacts"
          href="https://www.instagram.com/iamcoursin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/clouds/256/instagram-new--v2.png"
            alt="Instagram-logo"
          />
        </a>
        <a
          className="contacts"
          href="https://www.linkedin.com/in/gustavo-kozlowskidev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/clouds/256/linkedin.png"
            alt="Lindedin-logo"
          />
        </a>

        <ReactWhatsapp
          className="contacts"
          element="none"
          number="55 24 99305-7132"
        >
          <img
            src="https://img.icons8.com/clouds/256/whatsapp.png"
            alt="Whatsapp-logo"
          />
        </ReactWhatsapp>
      </div>
      <p>&copy; 2023 desenvolvido por Gustavo Kozlowski</p>
    </div>
  );
}

export default Footer;
