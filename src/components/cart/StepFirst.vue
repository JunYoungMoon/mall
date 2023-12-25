<script setup lang="ts">
import { computed } from 'vue';
import { MinusIcon, PlusIcon, TrashIcon } from 'vue-tabler-icons';

import { useEcomStore } from '@/store/goods';
import CartEmpty from './CartEmpty.vue';

const store = useEcomStore();
const getCart = computed(() => {
    return store.cart;
});
</script>
<template>
    <div v-if="getCart.length > 0">
        <h5 class="text-h5 my-8">Cart Item ({{ getCart.length }})</h5>
        <v-divider />
        <v-table>
            <thead>
                <tr>
                    <th class="text-center text-subtitle-1 font-weight-semibold">Product</th>
                    <th class="text-center text-subtitle-1 font-weight-semibold">Quantity</th>
                    <th class="text-center"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in getCart" :key="item.name">
                    <td>
                        <div class="d-flex align-center my-3 gap-2">
                            <img alt="product" class="rounded-md custom-img-box" :src="item.image" />
                            <div class="ma-2">
                                <h6 class="text-h6">{{ item.name }}</h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        <v-btn-toggle variant="outlined" divided color="success">
                            <v-btn size="x-small" @click="store.decrementQty(item.id)" :disabled="item.qty < 2">
                                <MinusIcon size="18" />
                            </v-btn>

                            <v-btn size="x-small">
                                {{ item.qty }}
                            </v-btn>

                            <v-btn size="x-small" @click="store.incrementQty(item.id)">
                                <PlusIcon size="18" />
                            </v-btn>
                        </v-btn-toggle>
                    </td>
                    <td class="text-left">
                        <v-btn small icon flat elevation="0"><TrashIcon size="18" class="text-error" @click="store.deleteCart(item.id)" /></v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
    <div v-else class="d-flex justify-center">
        <CartEmpty />
    </div>
</template>
<style>
.custom-img-box {
    width: 60px;
    height: 60px;
}
</style>
