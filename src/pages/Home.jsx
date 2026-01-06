import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Recycle, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import heroBg from '../assets/images/hero-bg.png';
import philosophyBg from '../assets/images/philosophy-bg.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content fade-in-up">
                    <h1 className="hero-title">Where Nature Meets <span className="text-italic">Self Care</span></h1>
                    <p className="hero-subtitle">
                        Handcrafted in small batches using natural ingredients.
                        Calm, nourishing, and real skincare for the mindful woman.
                    </p>
                    <div className="hero-actions">
                        <Link to="/products" className="btn btn-primary">
                            Explore Our Products
                        </Link>
                        <Link to="/about" className="btn btn-outline">
                            Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section philosophy-section">
                <div className="container">
                    <div className="section-header text-center mb-4">
                        <h2 className="section-title">Use Nature. Be Kind.</h2>
                        <p className="section-desc">Our philosophy is simple: nature has the answers.</p>
                    </div>

                    <div className="philosophy-grid">
                        <div className="philosophy-card">
                            <div className="icon-wrapper">
                                <Leaf size={32} />
                            </div>
                            <h3>100% Natural</h3>
                            <p>Made with ingredients you can recognize. No harsh chemicals, just pure herbal goodness.</p>
                        </div>

                        <div className="philosophy-card">
                            <div className="icon-wrapper">
                                <Recycle size={32} />
                            </div>
                            <h3>Small Batch</h3>
                            <p>Handcrafted in small batches to ensure freshness, quality, and intention in every bottle.</p>
                        </div>

                        <div className="philosophy-card">
                            <div className="icon-wrapper">
                                <Heart size={32} />
                            </div>
                            <h3>Made with Care</h3>
                            <p>We believe self-care should be gentle. Our products treat your skin with the respect it deserves.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Story Teaser */}
            <section className="section story-teaser__section">
                <div className="container story-teaser__container">
                    <div className="story-image">
                        <img src={philosophyBg} alt="Texture" className="story-bg-img" />
                    </div>
                    <div className="story-content">
                        <h2>Rooted in Nature. Crafted with Purpose.</h2>
                        <p>
                            From soothing aloe vera to nourishing oils and traditional herbal blends, each ingredient is selected to support your skin’s natural balance.
                        </p>
                        <p>
                            Ansa means "queen beauty" in Arabic. Our mission is to help every woman embrace her natural beauty.
                        </p>
                        <Link to="/about" className="btn btn-primary story-btn">
                            Read Our Story <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="section home-products-section">
                <div className="container">
                    <div className="section-header text-center mb-4">
                        <h2 className="section-title">Explore Our Collection</h2>
                        <p className="section-desc">Curated for your daily ritual.</p>
                    </div>

                    <div className="home-products-grid">
                        {products.slice(0, 3).map(product => (
                            <Link to="/products" key={product.id} className="home-product-card">
                                <div className="home-product-image">
                                    <img src={product.images[0]} alt={product.name} />
                                </div>
                                <h4>{product.name}</h4>
                                <span className="view-link">View Details</span>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/products" className="btn btn-outline">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
