import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">Ansa<span className="logo-accent">.</span></Link>
                    <p className="footer-tagline">
                        Nature’s Care, Bottled with Love.<br />
                        Handcrafted herbal skincare from Houston, Texas.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <Mail size={16} /> <span>nafisa.presswala@gmail.com</span>
                        </li>
                        <li>
                            <Phone size={16} /> <span>713 598 1092</span>
                        </li>
                        <li>
                            <MapPin size={16} /> <span>Houston, Texas (USA & Canada)</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Ansa Herbal Cosmetics. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
