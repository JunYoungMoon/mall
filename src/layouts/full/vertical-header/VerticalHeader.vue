<script setup lang="ts">
import { useCustomizer, useAuth } from '@/store';

import { onMounted, ref, watch } from 'vue';

import { GridDotsIcon, Menu2Icon } from 'vue-tabler-icons';

import LanguageDD from './LanguageDD.vue';
import ProfileDD from './ProfileDD.vue';
import RightMobileSidebar from './RightMobileSidebar.vue';
import Searchbar from './Searchbar.vue';
import ThemeChange from './ThemeChange.vue';

import router from '@/router';

const customizer = useCustomizer();
const appsdrawer = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);

watch(priority, newPriority => {
  priority.value = newPriority;
});

const authStore = useAuth();
const login = () => {
  void router.push({ name: 'Login' });
};

const isAuth = ref(false);

onMounted(async () => {
  isAuth.value = authStore.isAuth;
});
</script>

<template>
  <v-app-bar elevation="0" :priority="priority" height="70" class="">
    <v-btn class="hidden-lg-and-up" icon variant="flat" size="small">
      <img
          src="@/assets/images/sample/logo2.png"
          style="max-width: 100%; max-height: 100%;"
      >
    </v-btn>

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
<!--    <div class="ml-2">-->
<!--      <ProfileDD v-if="isAuth" />-->
<!--      <v-btn v-else icon class="custom-hover-primary" @click="login">-->
<!--        <i class="mdi mdi-login" style="font-size: 28px" />-->
<!--      </v-btn>-->
<!--    </div>-->
  </v-app-bar>
</template>
