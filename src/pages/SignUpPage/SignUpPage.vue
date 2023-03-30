<script setup lang="ts">
import BaseLink from '@/components/base/BaseLink/BaseLink.vue';
import useSwitchLocale from '../../i18n/hooks/useSwitchLocale/useSwitchLocale';
const { switchLocale } = useSwitchLocale();
const changeLocale = (locale: string) => {
  switchLocale(locale);
};
</script>

<template>
  <div class="sign-up">
    <p>SIGN UP PAGE</p>
    <button @click.prevent="changeLocale('el')">change locale</button>
    <br>
    <base-link to="/">go to sign in!</base-link>

  </div>
</template>