// third-party
import {Chance} from 'chance';
import {sub} from 'date-fns';


import type {Products} from '@/types/apps/EcommerceType.ts';

import product1 from '@/assets/images/products/s1.jpg';
import product1_1 from '@/assets/images/products/s1-1.jpg';
import product1_2 from '@/assets/images/products/s1-2.jpg';
import product1_3 from '@/assets/images/products/s1-3.jpg';
import product1_4 from '@/assets/images/products/s1-4.jpg';
import product2 from '@/assets/images/products/s2.jpg';
import product2_1 from '@/assets/images/products/s2-1.jpg';
import product2_2 from '@/assets/images/products/s2-2.jpg';
import product2_3 from '@/assets/images/products/s2-3.jpg';
import product2_4 from '@/assets/images/products/s2-4.jpg';


const chance = new Chance();
// products list
const products: Products[] = [
  {
    id: 1,
    image: product1,
    name: '갈비세트',
    description: chance.paragraph({sentences: 1}),
    rating: chance.floating({min: 0.1, max: 5.0}),
    discount: 25,
    salePrice: 200,
    offerPrice: 175,
    gender: 'kids',
    categories: ['fashion', 'toys'],
    colors: ['error', 'warning', 'primary', 'secondary'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), {days: 8, hours: 6, minutes: 20}),
    isStock: true,
    qty: 1,
    rank: 87,
    price: '200',
    detail1: product1_1,
    detail2: product1_2,
    detail3: product1_3,
    detail4: product1_4,
  },
  {
    id: 2,
    image: product2,
    name: '리챔세트',
    description: chance.paragraph({sentences: 2}),
    rating: chance.floating({min: 0.1, max: 5.0}),
    discount: 10,
    salePrice: 89,
    offerPrice: 81,
    gender: 'kids',
    categories: ['fashion', 'toys'],
    colors: ['lightprimary', 'success', 'lighterror', 'warning'],
    popularity: chance.natural(),
    date: chance.natural(),
    created: sub(new Date(), {days: 10, hours: 8, minutes: 69}),
    isStock: false,
    qty: 1,
    rank: 87,
    price: '100',
    detail1: product2_1,
    detail2: product2_2,
    detail3: product2_3,
    detail4: product2_4,
  },
];

export default products;
