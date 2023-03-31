import type { LocaleType } from '../../types';
import i18n, { defaultLocale } from '../../i18n';
import { useRoute, useRouter } from 'vue-router';

export default function useSwitchLocale() {
  const route = useRoute();
  const router = useRouter();

  const switchLocale = (localeCode: LocaleType) => {
    let routeName = route.name;
    i18n.setLocale(localeCode);

    const isNecessaryToRemoveDefaultLocaleAttachment = localeCode !== defaultLocale && typeof routeName === 'string' && routeName.slice(-5) === `---${defaultLocale}`;
    const isNecessaryToAddDefaultLocaleAttachment = localeCode === defaultLocale && typeof routeName === 'string' && routeName.slice(-5) !== `---${defaultLocale}`;

    if (isNecessaryToRemoveDefaultLocaleAttachment && typeof routeName === 'string') {
      routeName = routeName?.slice(0, -5);
    }

    if (isNecessaryToAddDefaultLocaleAttachment && typeof routeName === 'string') {
      routeName = `${routeName}---${defaultLocale}`;
    }

    if (!!routeName) {
      if (localeCode !== defaultLocale) {
        router.push({
          name: routeName,
          params: { locale: localeCode }
        });
      } else {
        router.push({
          name: routeName,
        });
      }

    }

  };

  return { switchLocale };
}