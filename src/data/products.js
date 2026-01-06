import moisturizer1 from '../assets/products/moisturizer-1.png';
import moisturizer2 from '../assets/products/moisturizer-2.png';
import moisturizer3 from '../assets/products/moisturizer-3.png';

import sunscreen1 from '../assets/products/sunscreen-1.png';
import sunscreen2 from '../assets/products/sunscreen-2.png';
import sunscreen3 from '../assets/products/sunscreen-3.png';

import faceWash1 from '../assets/products/face-wash-1.png';
import faceWash2 from '../assets/products/face-wash-2.png';

import nightCream1 from '../assets/products/night-cream-1.png';
import nightCream2 from '../assets/products/night-cream-2.png';

import deodorant1 from '../assets/products/deodorant-1.png';
import deodorant2 from '../assets/products/deodorant-2.png';

export const products = [
    {
        id: 1,
        name: 'Ansa Herbal Moisturizer',
        description: 'A gentle, nourishing moisturizer created to hydrate and soften the skin without feeling heavy. Blends natural oils and botanicals.',
        ingredients: ['Almond oil', 'Rose water', 'Glycerine', 'Vitamin E oil', 'Rosemary oil', 'Aloe vera gel'],
        images: [moisturizer1, moisturizer2, moisturizer3],
        category: 'Skincare'
    },
    {
        id: 2,
        name: 'Ansa Herbal Sunscreen',
        description: 'A naturally inspired sunscreen formulated to help protect and soothe the skin during daily sun exposure.',
        ingredients: ['Aloe vera gel', 'Carrot oil', 'Castor oil'],
        images: [sunscreen1, sunscreen2, sunscreen3],
        category: 'Protection'
    },
    {
        id: 3,
        name: 'Ansa Herbal Face Wash',
        description: 'A traditional herbal cleanser made with natural powders that cleanse the skin without stripping its natural oils.',
        ingredients: ['Gram flour', 'Mansoor dal', 'Wild turmeric', 'Sandalwood', 'Rice powder', 'Coffee', 'Neem', 'Aloe vera'],
        images: [faceWash1, faceWash2],
        category: 'Cleanser'
    },
    {
        id: 4,
        name: 'Anti Wrinkle Night Cream',
        description: 'A nourishing night cream designed to support skin renewal while you rest.',
        ingredients: ['Almond oil', 'Rose water', 'Glycerine', 'Vitamin E oil', 'Green tea', 'Aloe vera'],
        images: [nightCream1, nightCream2],
        category: 'Night Care'
    },
    {
        id: 5,
        name: 'Ansa Herbal Deodorant',
        description: 'A gentle, chemical-free deodorant created to keep you feeling fresh throughout the day.',
        ingredients: ['Arrowroot', 'Coconut oil', 'Kaolin clay', 'Shea butter'],
        images: [deodorant1, deodorant2],
        category: 'Body Care'
    }
];
