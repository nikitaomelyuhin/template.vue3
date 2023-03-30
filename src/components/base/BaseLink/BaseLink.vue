<script setup lang='ts'>
import { computed } from 'vue';
import useLocalePath from '@/i18n/hooks/useLocalePath/useLocalePath';
interface IProps {
  to: string;
}
const props = defineProps<IProps>();
const { localePath } = useLocalePath();

const url = computed(() => {
  return localePath(props.to);
});

</script>

<template>
  <router-link :to="url">
    <slot />
  </router-link>
</template>
