import { createI18n } from 'vue-i18n';
import en from './lang/en.json';
import ar from './lang/ar.json';
import de from './lang/de.json';
import cs from './lang/cs.json';
import el from './lang/el.json';
import es from './lang/es.json';
import fr from './lang/fr.json';
import hu from './lang/hu.json';
import it from './lang/it.json';
import ja from './lang/ja.json';
import ko from './lang/ko.json';
import ro from './lang/ro.json';
import tr from './lang/tr.json';
import uk from './lang/uk.json';
import zh from './lang/zh.json';
import ru from './lang/ru.json';
import pt from './lang/pt-pt.json';
import pl from './lang/pl.json';
import nl from './lang/nl.json';
import type { LocaleType, SetupOptions } from './types';

export const localeMessages = {
  en,
  ar,
  de,
  cs,
  el,
  es,
  fr,
  hu,
  it,
  ja,
  ko,
  ro,
  tr,
  uk,
  zh,
  ru,
  pt,
  pl,
  nl
};

export const defaultLocale = 'en';

let _i18n: any;

function setup(options: SetupOptions = { locale: defaultLocale }) {
  _i18n = createI18n({
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: localeMessages
  });
  setLocale(options.locale);
  return _i18n;
}

function setLocale(newLocale: LocaleType) {
  _i18n.global.locale.value = newLocale;
}

export default {
  get vueI18n() {
    return _i18n;
  },
  setup,
  setLocale,
};