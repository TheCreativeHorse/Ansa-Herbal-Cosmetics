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

import ageReversalCream1 from '../assets/products/age-reversal-cream-1.png';
import ageReversalCream2 from '../assets/products/age-reversal-cream-2.png';

import ageReversalOil1 from '../assets/products/age-reversal-oil-1.png';
import ageReversalOil2 from '../assets/products/age-reversal-oil-2.png';

import herbalShampoo1 from '../assets/products/herbal-shampoo-1.png';
import herbalShampoo2 from '../assets/products/herbal-shampoo-2.png';

import dayCream1 from '../assets/products/day-cream-1.png';
import dayCream2 from '../assets/products/day-cream-2.png';


export const products = [
    {
        id: 1,
        name: 'Ansa Herbal Moisturizer',
        description: 'A gentle, nourishing moisturizer created to hydrate and soften the skin without feeling heavy. Blends natural oils and botanicals. All creams are gentle and suitable for use on the entire body.',
        ingredients: ['Almond oil', 'Rose water', 'Glycerine'],
        storage: 'Store in a cool dry place and handle with care',
        images: [moisturizer1, moisturizer2, moisturizer3],
        price: '25',
        category: 'Skincare'
    },
    {
        id: 2,
        name: 'Ansa Herbal Sunscreen',
        description: 'A naturally inspired sunscreen formulated to help protect and soothe the skin during daily sun exposure. All creams are gentle and suitable for use on the entire body.',
        ingredients: ['Aloe vera gel', 'Carrot oil', 'Castor oil'],
        images: [sunscreen1, sunscreen2],
        price: '25',
        category: 'Protection'
    },
    {
        id: 3,
        name: 'Ansa Herbal Face Wash',
        description: 'A traditional herbal cleanser made with natural powders that cleanse the skin without stripping its natural oils.',
        ingredients: ['Sandal', 'Neem', 'Wild turmeric'],
        usage: 'Take half a spoon in your palm and soak with rose water or regular water and apply',
        images: [faceWash1, faceWash2],
        price: '25',
        category: 'Cleanser'
    },
    {
        id: 4,
        name: 'Anti Wrinkle Night Cream',
        description: 'A nourishing night cream designed to support skin renewal while you rest. All creams are gentle and suitable for use on the entire body.',
        ingredients: ['Almond oil', 'Green tea', 'Rose water'],
        storage: 'Store in a cool dry place and handle with care',
        images: [nightCream1, nightCream2],
        price: '25',
        category: 'Night Care'
    },
    {
        id: 5,
        name: 'Ansa Herbal Deodorant',
        description: 'A gentle, chemical-free deodorant created to keep you feeling fresh throughout the day.',
        ingredients: ['Coconut oil', 'Shea butter', 'Arrowroot', 'No baking soda'],
        images: [deodorant1, deodorant2],
        price: '8',
        category: 'Body Care'
    },
    {
        id: 6,
        name: 'Ansa Age Reversal Night Cream',
        description: 'A regenerative night cream formulated with orange and rosehip oils to rejuvenate and repair skin overnight. All creams are gentle and suitable for use on the entire body.',
        ingredients: ['Orange oil', 'Rosehip oil', 'Rose water'],
        storage: 'Store in a cool dry place and handle with care',
        images: [ageReversalCream1, ageReversalCream2],
        price: '25',
        category: 'Night Care'
    },
    {
        id: 7,
        name: 'Ansa Age Reversal Oil',
        description: 'A revitalizing blend of 11 essential oils, including almond and rosemary, crafted to restore youthful radiance.',
        ingredients: ['Almond oil', 'Rosemary oil', 'Blend of 11 essential oils'],
        usage: 'Take few drops in your palm and rub then apply on your face and neck',
        images: [ageReversalOil1, ageReversalOil2],
        price: '15',
        category: 'Face Care'
    },
    {
        id: 8,
        name: 'Ansa Herbal Shampoo',
        description: 'A natural herbal shampoo infused with amla, shikakai, and neem to cleanse, strengthen, and soften hair.',
        ingredients: ['Amala', 'Shikakai', 'Reetha', 'Flax seed', 'Fenu Greek', 'Neem'],
        // User descriptive text merged into description? Not explicitly requested, but kept description consistent.
        images: [herbalShampoo1, herbalShampoo2],
        price: '20',
        category: 'Hair Care'
    },
    {
        id: 9,
        name: 'Ansa Day Cream',
        description: 'A lightweight, nourishing day cream made with aloe vera, shea butter, and frankincense oil to keep skin hydrated, calm, and naturally radiant throughout the day. Absorbs smoothly without feeling heavy, leaving your skin soft, balanced, and refreshed. Suitable for daily use.',
        ingredients: ['Aloe Vera', 'Shea Butter', 'Frankincense Oil'],
        storage: 'Store in a cool dry place & handle with care',
        images: [dayCream1, dayCream2],
        price: '25',
        category: 'Skincare'
    }
];
