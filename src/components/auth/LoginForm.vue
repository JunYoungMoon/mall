<script setup lang="ts">
import { ref } from 'vue';

import { Form } from 'vee-validate';

import { useAuthStore } from '@/store/auth';

const valid = ref(false);
const phone = ref('');
const birth = ref('');

const phoneRules = ref([
  (v: string) => !!v || '휴대폰번호를 입력해 주세요.',
  (v: string) =>
    /^010-\d{4}-\d{4}$/.test(v) ||
    '잘못된 휴대폰번호 형식입니다.예)010-1234-1234',
]);
const birthRules = ref([
  (v: string) => !!v || '생년월일을 입력해 주세요.',
  (v: string) =>
    /^\d{6}$/.test(v) || '잘못된 생년월일 형식입니다.예)881213',
]);
const validate = async (values: any, { setErrors }: any) => {
  const authStore = useAuthStore();
  return await authStore
    .login(phone.value, birth.value)
    .catch(error => setErrors({ apiError: error }));
};
</script>

<template>
  <div class="d-flex align-center text-center mb-6">
    <div
      class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative"
    >
      <span class="bg-surface px-5 py-3 position-relative">정보 입력</span>
    </div>
  </div>
  <Form v-slot="{ errors, isSubmitting }" class="mt-5" @submit="validate">
    <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
      휴대폰번호
    </v-label>
    <VTextField
      v-model="phone"
      :rules="phoneRules"
      class="mb-2"
      required
      hide-details="auto"
      placeholder="예)010-1234-1234"
    />
    <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
      생년월일
    </v-label>
    <VTextField
      v-model="birth"
      :rules="birthRules"
      class="mb-2"
      required
      hide-details="auto"
      placeholder="예)881213"
    />
    <v-btn
      size="large"
      :loading="isSubmitting"
      color="primary"
      :disabled="valid"
      block
      type="submit"
      variant="flat"
      class="text-h6 font-weight-bold"
    >
      로그인
    </v-btn>
    <div v-if="errors.apiError" class="mt-2">
      <v-alert color="error">{{ errors.apiError }}</v-alert>
    </div>
  </Form>
</template>
