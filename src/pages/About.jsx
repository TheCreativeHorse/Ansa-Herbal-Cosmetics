import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import aboutImage from '../assets/images/about-story.png';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header section">
                <div className="container text-center">
                    <h1 className="about-title">Our Story</h1>
                    <p className="about-subtitle">A Journey That Began with Self Care</p>
                </div>
            </div>

            <section className="section about-content-section">
                <div className="container about-grid">
                    <div className="about-image-wrapper fade-in-up">
                        <img src={aboutImage} alt="Herbal Ingredients" />
                    </div>

                    <div className="about-text fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3>It started with a simple intention.</h3>
                        <p>
                            I’m Nafisa Presswala, the founder of Ansa, based in Houston, Texas. My journey into herbal skincare began when I wanted to care for my own skin without relying on harsh chemicals. I started experimenting with natural ingredients, creating small blends for myself, and paying close attention to how my skin responded.
                        </p>
                        <p>
                            What I noticed surprised me. My skin felt calmer, healthier, and more balanced. That’s when I realized something important. Effective skincare doesn’t need to be complicated. It doesn’t need cruelty or chemicals. It simply needs the right ingredients and the patience to let nature do its work.
                        </p>
                        <p>
                            What started as a personal routine slowly turned into a passion. Friends and family began asking about the products I was using. I shared my blends with them, and soon they began noticing results too.
                        </p>
                        <div className="quote-box">
                            "Ansa is not about perfection. It’s about embracing your natural beauty and caring for yourself in a way that feels true."
                        </div>
                    </div>
                </div>
            </section>

            <section className="section promise-section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="section-title">Our Promise</h2>
                        <p className="section-desc">We are committed to purity, kindness, and quality.</p>
                    </div>

                    <div className="promise-grid">
                        <div className="promise-card fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <ShieldCheck size={40} />
                            </div>
                            <h4>Honesty</h4>
                            <p>Ingredients you can recognize and trust. No hidden chemicals, just pure nature.</p>
                        </div>

                        <div className="promise-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <Heart size={40} />
                            </div>
                            <h4>Care</h4>
                            <p>Formulations that are gentle, effective, and crafted with genuine intention.</p>
                        </div>

                        <div className="promise-card fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <Sparkles size={40} />
                            </div>
                            <h4>Respect</h4>
                            <p>Respect for your skin's natural balance and the planet we all share.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
