<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { MinusIcon, PlusIcon } from 'vue-tabler-icons';

import ProductCarousel from './ProductCarousel.vue';

import products from '@/_mockApis/apps/ecommerce/products';
import router from '@/router';
import { useEcomStore } from '@/store/goods';
const store = useEcomStore();

const route = useRoute();

onMounted(() => {
  void store.fetchProduct();
});

const getProduct = computed(() => {
  return products[parseInt(route.params.id as string) - 1];
});

const incrementQty = () => {
  if (getProduct.value?.qty !== undefined) {
    getProduct.value.qty++;
  }
};

const decrementQty = () => {
  if (getProduct.value?.qty !== undefined && getProduct.value.qty > 0) {
    getProduct.value.qty--;
  }
};
const addToCart = (getProduct : any) => {
  store.AddToCart(getProduct);
  void router.push('/goods/checkout');
};
</script>
<template>
  <div v-if="getProduct">
    <v-row>
      <v-col lg="12" sm="12">
        <ProductCarousel />
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12" sm="12" class="pl-lg-5">
        <div>
          <h3 class="text-h3 my-2 mb-3">
            {{ getProduct.name }}
          </h3>
        </div>
        <p class="v-col-lg-10 px-0">
          <v-col cols="auto">
            <v-icon class="info-icon">mdi-information</v-icon>
            상품 신청하는 방법
            <br />
            <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
            스팸 : 수량에 상관없이 한개의 배송지로만 입력
            <br />
            <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
            LA갈비 : 수량에 따라 배송지 다건으로 입력가능
            <br />
            <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
            단, 배송지 다건시 한건 입력 완료 후 입력해야함.
            <br />
            - 수량은 조절 가능
          </v-col>
        </p>
        <v-row>
          <v-col cols="6" sm="2" class="d-flex align-center">
            <h6 class="text-h6">수량</h6>
          </v-col>
          <v-col cols="6" sm="10">
            <v-btn-toggle divided variant="outlined">
              <v-btn size="x-small" color="secondary" @click="decrementQty()">
                <MinusIcon size="18" />
              </v-btn>

              <v-btn size="x-small" color="secondary">
                {{ getProduct.qty }}
              </v-btn>

              <v-btn size="x-small" color="secondary" @click="incrementQty()">
                <PlusIcon size="18" />
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col cols="12" sm="4">
            <v-btn
              block
              size="large"
              color="primary"
              @click="addToCart(getProduct)"
            >
              신청하기
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss">
.productCustomize tr td {
  padding: 15px 20px;
  vertical-align: center;
}
</style>
