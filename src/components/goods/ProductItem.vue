<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps({
  name: String,
  image: String,
  desc: String,
  rating: Number,
  salePrice: Number,
  offerPrice: Number,
  goto: Number || String || Object || Array
});
</script>

<template>
  <v-card variant="outlined" class="rounded card-hover overflow-hidden">
    <router-link :to="`/goods/detail/${goto}`">
      <img alt="product" :src="image" class="w-100"/>
    </router-link>
    <v-card-item class="pt-1 text-center">
      <v-btn
          color="primary"
          class="text-h6 font-weight-bold"
          :to="`/goods/detail/${goto}`"
      >
        {{ name }} 신청하기
      </v-btn>
    </v-card-item>
  </v-card>
</template>
