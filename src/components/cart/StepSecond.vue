<script setup lang="ts">
import {ref} from 'vue';

const phone = ref('');
const zonecode = ref('');
const roadAddress = ref('');
const detailAddress = ref('');

declare global {
  interface Window {
    daum?: any; // Use 'any' if you don't have type information for 'daum'
  }
}
const openPostCode = () => {
  new window.daum.Postcode({
    oncomplete: function(data : any) {
      zonecode.value = data.zonecode;
      roadAddress.value = data.roadAddress;
      detailAddress.value = data.detailAddress;
    }
  }).open();
};

</script>

<template>
  <v-row>
    <v-col cols="12">
      <h5 class="text-h5 my-8">주문 고객 정보</h5>

      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        주문고객명
      </v-label>
      <VTextField
          v-model="phone"
          class="mb-2"
          required
          hide-details="auto"
          placeholder="이름"
      />

      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        휴대폰
      </v-label>
      <v-row>
        <v-col cols="4">
          <VTextField
              v-model="phone[0]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="010"
              maxlength="3"
          />
        </v-col>
        <v-col cols="4">
          <VTextField
              v-model="phone[1]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="1234"
              maxlength="4"
          />
        </v-col>
        <v-col cols="4">
          <VTextField
              v-model="phone[2]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="5678"
              maxlength="4"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
        <h5 class="text-h5 my-8">배송지 정보</h5>

        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
          받으시는분
        </v-label>
        <VTextField
            v-model="phone"
            class="mb-2"
            required
            hide-details="auto"
        />

        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
          주소
        </v-label>
        <v-row>
          <v-col cols="6">
            <VTextField
                v-model="zonecode"
                class="mb-2"
                required
                hide-details="auto"
                maxlength="6"
                style="height: 100%;"
            />
          </v-col>
          <v-col cols="6">
            <v-btn color="primary" style="height: 100%;" @click="openPostCode">우편번호찾기</v-btn>
          </v-col>
          <v-col cols="12">
            <VTextField
                v-model="roadAddress"
                class="mb-2"
                required
                hide-details="auto"
                maxlength="6"
                style="height: 100%;"
            />
          </v-col>
          <v-col cols="12">
            <VTextField
                v-model="detailAddress"
                class="mb-2"
                required
                hide-details="auto"
                maxlength="6"
                style="height: 100%;"
            />
          </v-col>
        </v-row>
    </v-col>
    <v-col cols="12">
      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        휴대폰
      </v-label>
      <v-row>
        <v-col cols="4">
          <VTextField
              v-model="phone[0]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="010"
              maxlength="3"
          />
        </v-col>
        <v-col cols="4">
          <VTextField
              v-model="phone[1]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="1234"
              maxlength="4"
          />
        </v-col>
        <v-col cols="4">
          <VTextField
              v-model="phone[2]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="5678"
              maxlength="4"
          />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        전화번호
      </v-label>
      <v-row>
        <v-col cols="4">
          <VTextField
              v-model="phone[0]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="010"
              maxlength="3"
          />
        </v-col>
        <v-col cols="4">
          <VTextField
              v-model="phone[1]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="1234"
              maxlength="4"
          />
        </v-col>
        <v-col cols="4">
          <VTextField
              v-model="phone[2]"
              class="mb-2"
              required
              hide-details="auto"
              placeholder="5678"
              maxlength="4"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">
        배송시 요청사항
      </v-label>
      <v-textarea></v-textarea>
    </v-col>
  </v-row>
</template>
