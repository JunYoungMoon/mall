// third-party
import { add, sub } from 'date-fns';
import { Chance } from 'chance';


import product1 from '@/assets/images/products/s1.jpg';
import product2 from '@/assets/images/products/s2.jpg';

//Types
import type { Products } from '@/types/apps/EcommerceType';

const chance = new Chance();
// products list
const products: Products[] = [
    {
        id: 1,
        image: product1,
        name: '갈비세트',
        description: chance.paragraph({ sentences: 1 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 25,
        salePrice: 200,
        offerPrice: 175,
        gender: 'kids',
        categories: ['fashion', 'toys'],
        colors: ['error', 'warning', 'primary', 'secondary'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
        isStock: true,
        qty: 1,
        rank:87,
        price:'200'
    },
    {
        id: 2,
        image: product2,
        name: '리챔세트',
        description: chance.paragraph({ sentences: 2 }),
        rating: chance.floating({ min: 0.1, max: 5.0 }),
        discount: 10,
        salePrice: 89,
        offerPrice: 81,
        gender: 'kids',
        categories: ['fashion', 'toys'],
        colors: ['lightprimary', 'success', 'lighterror', 'warning'],
        popularity: chance.natural(),
        date: chance.natural(),
        created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
        isStock: false,
        qty: 1,
        rank:87,
        price:'100'
    },
];

export default products;
