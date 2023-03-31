import { describe, it, expect } from 'vitest';
import BaseLink from './BaseLink.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';

describe('BaseLink', () => {
  const i18n = createI18n({
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    locale: 'zh',
    messages: {}
  });
  it('should return correct url', () => {
    const wrapper = shallowMount(BaseLink as any, {
      props: {
        to: '/sign-up'
      },
      global: {
        plugins: [i18n]
      }
    });
    expect(wrapper.vm.url).toBe('/zh/sign-up');
  });
});
