<script setup lang="ts">
import { ref } from 'vue';
import { BasketIcon, FileDescriptionIcon } from 'vue-tabler-icons';
import {useEcomStore} from '@/store/goods';
import StepFirst from './StepFirst.vue';
import StepSecond from './StepSecond.vue';
const store = useEcomStore();
const tab = ref('tab-1');
const changeTab = (e: string) => {
  tab.value = e;
}
</script>
<template>
  <v-card variant="outlined">
    <v-card-text>
      <v-tabs v-model="tab" color="primary" class="customTab">
        <v-tab value="tab-1" rounded="md" class="mb-3 mx-2 text-left" height="70">
          <BasketIcon stroke-width="1.5" width="20" class="v-icon--start" />
          <div>
            <div>장바구니</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">상품 요약</span>
          </div>
        </v-tab>

        <v-tab value="tab-2" rounded="md" class="mb-3 mx-2 text-left" height="70" :disabled="store.cart.length < 1">
          <FileDescriptionIcon stroke-width="1.5" width="20" class="v-icon--start" />
          <div>
            <div>주문서</div>
            <span class="text-subtitle-2 text-lightText text-medium-emphasis font-weight-medium d-block">
                            주문서 작성
                        </span>
          </div>
        </v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="tab-1" class="pa-1">
          <StepFirst />
          <v-row class="mt-3 text-center">
            <v-col cols="6">
              <v-btn color="primary" variant="tonal" to="/goods">쇼핑하러 가기</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" @click="changeTab('tab-2')" v-if="store.cart.length >= 1">주문하기</v-btn>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="tab-2" class="pa-1">
          <StepSecond />
          <v-row class="mt-3 text-center">
            <v-col cols="6">
              <v-btn color="primary" variant="tonal" @click="changeTab('tab-1')">뒤로가기</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" @click="changeTab('tab-3')">주문하기</v-btn>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<style lang="scss">
.customTab {
  min-height: 68px;
}
</style>
