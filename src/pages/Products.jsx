import React, { useState } from 'react';
import { products } from '../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Products.css';

const ImageCarousel = ({ images, productName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="product-carousel">
            <div className="image-wrapper">
                <img
                    src={images[currentIndex]}
                    alt={`${productName} view ${currentIndex + 1}`}
                    className="carousel-image"
                />

                {images.length > 1 && (
                    <>
                        <button className="carousel-btn prev" onClick={prevImage} aria-label="Previous image">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="carousel-btn next" onClick={nextImage} aria-label="Next image">
                            <ChevronRight size={24} />
                        </button>

                        <div className="carousel-dots">
                            {images.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(idx)}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const Products = () => {
    return (
        <div className="products-page">
            <div className="products-header">
                <div className="container text-center">
                    <h1 className="page-title">Our Collection</h1>
                    <p className="page-desc">Handcrafted herbal skincare designed to support your skin's natural rhythm.</p>
                </div>
            </div>

            <div className="products-list">
                {products.map((product, index) => (
                    <div key={product.id} className={`product-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <div className="product-image-col">
                            <ImageCarousel images={product.images} productName={product.name} />
                        </div>
                        <div className="product-text-col">
                            <span className="product-category">{product.category}</span>
                            <h2>{product.name}</h2>
                            <p className="product-description">{product.description}</p>

                            <div className="ingredients-section">
                                <h4>Key Ingredients</h4>
                                <div className="ingredients-tags">
                                    {product.ingredients.map(ing => (
                                        <span key={ing} className="ing-tag">{ing}</span>
                                    ))}
                                </div>
                            </div>

                            {product.usage && (
                                <div className="product-usage">
                                    <h4>How to Use</h4>
                                    <p>{product.usage}</p>
                                </div>
                            )}

                            {product.storage && (
                                <div className="product-storage">
                                    <h4>Storage</h4>
                                    <p>{product.storage}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
