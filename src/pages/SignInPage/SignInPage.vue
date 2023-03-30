<script setup lang="ts">
import BaseSvg from '@/components/base/BaseSvg/BaseSvg.vue';
import BaseLink from '@/components/base/BaseLink/BaseLink.vue';
import { useTestStore } from '@/store/modules/testStore/testStore';
import { useI18n } from 'vue-i18n';
import useSwitchLocale from '@/i18n/hooks/useSwitchLocale/useSwitchLocale';
import useLocalePath from '@/i18n/hooks/useLocalePath/useLocalePath';
import { useRouter } from 'vue-router';

const i18n = useI18n();
const testStore = useTestStore();
const { switchLocale } = useSwitchLocale();
const { localePath } = useLocalePath();
const router = useRouter();

const incrementCount = () => {
  switchLocale('zh');
  // i18n.locale.value = 'es';
  testStore.increment();
};

const routerPushMethod = () => {
  router.push(localePath('/sign-up'));
};

const changeLocale = (locale: string) => {
  switchLocale(locale);
};
</script>

<template>
  <div class="sign-in">
    <p>SIGN IN PAGE</p>
    <p>{{ i18n.t('What do I do first: install the program or get an account?') }}</p>
    <button class="increment" @click.prevent="changeLocale('zh')">changeLocale</button>
    <br>
    <button class="increment" @click.prevent="changeLocale('ens')">changeToEN</button>
    <br>
    <button class="increment" @click.prevent="routerPushMethod()">routerPushMethod</button>
    <br>
    <button class="increase" @click.prevent="() => testStore.increase(24)">increase</button>
    <div class="result">result: {{ testStore.count.data }}</div>
    <base-svg name="sort-ba" width="40" height="40" fill="red" />
    <br>
    <base-link to="/sign-up">go to sign up base link</base-link>
  </div>
</template>