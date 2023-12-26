import { defineStore } from 'pinia';

// types
import { filter, map } from 'lodash';

import type { ProductStateProps } from '@/types/apps/EcommerceType';

import axios from '@/utils/axios';

export const useEcomStore = defineStore({
  id: 'goods',
  state: (): ProductStateProps => ({
    products: [],
    cart: [],
    gender: '',
    category: [],
    price: '',
    subTotal: 0,
    discount: 5,
    total: 0,
    addresses: [],
    color: 'All',
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      try {
        const data = await axios.get('/api/products/list');
        this.products = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // AddToCart
    AddToCart(item: any) {
      const product = item;
      this.cart = [...this.cart, product];
    },
    // delete Cart
    deleteCart(item: any) {
      const updateCart = filter(this.cart, p => p.id !== item);
      this.cart = updateCart;
    },
    // qty
    incrementQty(item: any) {
      const productId = item;
      const updateCart = map(this.cart, (product: any) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }
        return product;
      });
      this.cart = updateCart;
    },
    // qty
    decrementQty(item: any) {
      const productId = item;
      const updateCart = map(this.cart, (product: any) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty - 1,
          };
        }
        return product;
      });
      this.cart = updateCart;
    },
  },
});
