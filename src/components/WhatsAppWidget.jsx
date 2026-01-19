import React from 'react';
import './WhatsAppWidget.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const phoneNumber = '17135981092'; // Cleaned number for URL
  const message = 'Hello! I have an inquiry about Ansa Herbal products.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-container">
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-tooltip">Chat with us</span>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
