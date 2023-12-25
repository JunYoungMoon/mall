<script setup lang="ts">
import {ref, computed} from 'vue';
import {useRoute} from 'vue-router';

import { Carousel, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const route = useRoute();

import products from '@/_mockApis/apps/ecommerce/products';

const getImage = computed(() => {
  return products[parseInt(route.params.id as string) - 1];
});

const slideShow = [
  {
    image: getImage.value.image,
    id: 1
  },
  {
    image: getImage.value.detail1,
    id: 2
  },
  {
    image: getImage.value.detail2,
    id: 3
  },
  {
    image: getImage.value.detail3,
    id: 4
  },
  {
    image: getImage.value.detail4,
    id: 5
  },
];

const currentSlide = ref(0);

const slideTo = (val: number) => {
  currentSlide.value = val;
}
</script>

<template>
  <div>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="(slide, i) in slideShow" :key="i">
        <div class="carousel__item">
          <img alt="product" :src="slide.image" class="w-100 rounded-md"/>
        </div>
      </Slide>

      <template #addons>
        <Navigation/>
      </template>
    </Carousel>

    <Carousel
      id="thumbnails"
      :currentSlide="currentSlide"
      :transition="500"
      :items-to-show="6"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="(slide, i) in slideShow" :key="i">
        <div class="carousel__item cursor-pointer" @click="slideTo(slide.id - 1)">
          <img alt="product" :src="slide.image" class="w-100"/>
        </div>
      </Slide>

      <template #addons>
        <Navigation/>
      </template>
    </Carousel>
  </div>
</template>
<style lang="scss">
#thumbnails {
  .carousel__slide {
    border: 2px solid transparent;
    line-height: 0px;
  }

  .carousel__slide--active {
    border: 2px solid rgb(var(--v-theme-primary));
  }
}
#gallery {
  width: 100%; // 모바일 화면에서 부모 요소의 100%를 사용
}
@media (max-width: 767px) {
  .carousel__slide {
    width: 100%; /* 모바일 화면에서는 부모 요소의 100%를 사용 */
  }
}

</style>
