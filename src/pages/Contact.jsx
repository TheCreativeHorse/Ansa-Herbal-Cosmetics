import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container text-center">
                    <h1 className="page-title">Get In Touch</h1>
                    <p className="page-desc">We'd love to hear from you. Reach out with any questions about our products or just to say hello.</p>
                </div>
            </div>

            <section className="section contact-section">
                <div className="container contact-container">
                    {/* Contact Info */}
                    <div className="contact-info-card glass-panel">
                        <h3>Contact Information</h3>
                        <ul className="info-list">
                            <li>
                                <div className="icon-box"><Mail /></div>
                                <div>
                                    <span className="label">Email</span>
                                    <a href="mailto:nafisa.presswala@gmail.com" className="value">nafisa.presswala@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box"><Phone /></div>
                                <div>
                                    <span className="label">Phone</span>
                                    <a href="tel:7135981092" className="value">713 598 1092</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box"><MapPin /></div>
                                <div>
                                    <span className="label">Location</span>
                                    <p className="value">Houston, Texas<br />Serving USA and Canada</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card">
                        <h3>Send a Message</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your name" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your email" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="How can we help?" className="form-input"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
