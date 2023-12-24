<script setup lang="ts">
import AppBaseCard from '@/components/shared/AppBaseCard.vue';
import ProductItemVue from '@/components/goods/ProductItem.vue';

import products from "@/_mockApis/apps/ecommerce/products";
</script>

<template>
  <v-card elevation="10" class="inside-left-sidebar overflow-hidden">
    <AppBaseCard>
      <!-- -------------------------------------- -->
      <!-- Right Side Content Part -->
      <!-- -------------------------------------- -->
      <template v-slot:rightpart>
        <img src="@/assets/images/sample/main1.png" style="max-width: 100%;">
        <v-card class="rounded-border" outlined>
          <v-card-text class="text-center">
            <span style="font-weight: bold;">한화 손보</span> 고객님은 <br>
            <span style="color: orange; font-weight: bold;">LA갈비 : 5개 / 스팸 : 10개</span> <br>
            신청 하실 수 있습니다. <br>
            아래 상품에서 해당 상품을 신청해주세요!
          </v-card-text>
        </v-card>
        <perfect-scrollbar>
          <v-sheet class="pa-4">
            <div class="d-flex gap-2 align-center mb-4 justify-space-between">
              <h5 class="text-h5 d-none d-lg-flex font-weight-semibold">Products</h5>
            </div>
            <v-row v-if="products.length >= 1">
              <v-col cols="12" lg="4" sm="6" v-for="product in products" :key="product.id">
                <ProductItemVue
                    :name="product.name"
                    :image="product.image"
                    :desc="product.description"
                    :salePrice="product.salePrice"
                    :offerPrice="product.offerPrice"
                    :rating="product.rating"
                    :goto="product.id"
                />
              </v-col>
            </v-row>
            <ProductEmplty v-else />
          </v-sheet>
        </perfect-scrollbar>
        <v-card class="rounded-border" outlined>
          <v-card-text class="text-center">
            ※원하는 항목을 하나 선택하여 '신청하기'를<br>
            눌러주시기 바랍니다.<br>
          </v-card-text>
        </v-card>
      </template>
    </AppBaseCard>
  </v-card>
</template>

<style scoped lang="scss">
@media (max-width: 1279px) {
  .v-card {
    position: unset;
  }
}
</style>
