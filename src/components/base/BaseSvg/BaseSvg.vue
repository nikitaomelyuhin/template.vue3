<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';
interface IProps {
  name: string;
  width?: string;
  height?: string;
  fill?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  width: '50',
  height: '50',
  fill: '#000'
});

const icon = defineAsyncComponent(() => import(`../../../assets/icons/${props.name}.svg`));

</script>

<template>
  <component :is="icon" :fill="props.fill" :width="props.width" :height="props.height" />
</template>