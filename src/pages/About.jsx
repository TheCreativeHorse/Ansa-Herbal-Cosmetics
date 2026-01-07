import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import aboutImage from '../assets/images/about-story.png';
import './About.css';

const About = () => {
    const testimonials = [
        {
            id: 1,
            product: "Ansa Face Cleanser",
            text: "Have been using this cleanser for quite some time now and it has shown great results especially diminishing sun burn, brightening face and gives a nice glow on the skin. It is good for all skin types. Definitely recommend this for all",
            author: "Fatema"
        },
        {
            id: 2,
            product: "ANSA Night Cream",
            text: "I wake up with soft, refreshed, healthy-looking skin. ❤️",
            author: "Maria"
        },
        {
            id: 3,
            product: "ANSA Day Cream",
            text: "Makes my skin feel awake and refreshed every morning.",
            author: "Tasneem"
        },
        {
            id: 4,
            product: "Ansa Herbal Shampoo",
            text: "I absolutely loved this herbal shampoo. It really helped reduce my hair fall, and my hair feels so silky, smooth, and shiny after every wash. The fact that it’s chemical-free is a huge plus for me. I’m very happy with the results and would definitely recommend it to others.",
            author: "Zainab"
        }
    ];

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

            <section className="section testimonials-section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="section-title">What People Say</h2>
                        <p className="section-desc">Stories from our community about their journey with Ansa.</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((t, index) => (
                            <div key={t.id} className="testimonial-card fade-in-up" style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}>
                                <div className="quote-icon">❝</div>
                                <p className="testimonial-text">{t.text}</p>
                                <div className="testimonial-footer">
                                    <span className="testimonial-author">- {t.author}</span>
                                    <span className="testimonial-product">{t.product}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
