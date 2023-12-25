<script setup lang="ts">
import imageEmpty from '@/assets/images/products/empty-shopping-cart.svg';
</script>

<template>
    <v-row class="justify-center">
        <v-col class="text-center" lg="6">
            <v-img :src="imageEmpty" alt="cover" width="300px" class="mx-auto mt-5 mb-5" />
            <h5 class="text-h5">장바구니 비어있음</h5>
        </v-col>
    </v-row>
</template>
