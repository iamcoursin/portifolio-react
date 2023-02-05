import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import ZapZapIcon from "@material-ui/icons/WhatsApp";
import ReactWhatsapp from "react-whatsapp";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/iamcoursin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/gustavo-kozlowskidev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>

        <ReactWhatsapp element="none" number="55 24 99305-7132">
          <ZapZapIcon />
        </ReactWhatsapp>
      </div>
      <p>&copy; 2023 desenvolvido por Gustavo Kozlowski</p>
    </div>
  );
}

export default Footer;
