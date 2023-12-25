import {defineStore} from 'pinia';

// types
import {filter, map, sum} from 'lodash';

import type {ProductStateProps} from '@/types/apps/EcommerceType';

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
    //qty
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
    //qty
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
