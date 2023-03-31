import { expect, it, describe, vi } from 'vitest';
import useLocalePath from './useLocalePath';

describe('useLocalePath', () => {
  it('If the locale is not default there should be a locale prefix', () => {
    vi.mock('vue-i18n', () => {
      return {
        useI18n: vi.fn(() => ({ locale: { value: 'zh' } }))
      };
    });

    const { localePath } = useLocalePath();

    expect(localePath('/sign-up')).toBe('/zh/sign-up');
    expect(localePath('/')).toBe('/zh');

  });
});