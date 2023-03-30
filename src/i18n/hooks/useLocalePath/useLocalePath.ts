import { useI18n } from 'vue-i18n';
import { defaultLocale } from '@/i18n/i18n';

export default function useLocalePath() {
  const { locale } = useI18n();

  const localePath = (path: string) => {
    if (path === '/') {
      if (locale.value !== defaultLocale) {
        return `/${locale.value}`;
      } else {
        return '/';
      }
    } else {
      if (locale.value !== defaultLocale) {
        return `/${locale.value}${path}`;
      } else {
        return `${path}`;
      }
    }
  };

  return { localePath };
}