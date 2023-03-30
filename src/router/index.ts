import i18n, { localeMessages, defaultLocale } from '@/i18n/i18n';
import { createRouter, createWebHistory } from 'vue-router';
import cloneDeep from '@/helpers/cloneDeep/cloneDeep';

const routes = [
  {
    path: '',
    name: 'sign-in',
    component: () => import('@/pages/SignInPage/SignInPage.vue'),
  },
  {
    path: 'sign-up',
    name: 'sign-up',
    component: () => import('@/pages/SignUpPage/SignUpPage.vue')
  }
];

//@ts-ignore
const enRoutes = cloneDeep(routes).map((route: any) => {
  route.path = `/${route.path}`;
  route.name = `${route.name}---${defaultLocale}`;
  return route;
});


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: enRoutes,
    },
    {
      path: '/:locale',
      children: routes,
    },

  ]
});

router.beforeEach((to, from) => {
  const localeCodes = Object.keys(localeMessages).reduce((acc: string[], item: string): string[] => [...acc, item], []);
  const newLocale = to.params.locale;
  const prevLocale = from.params.locale;
  if (newLocale === prevLocale) {
    return;
  }

  if (typeof newLocale === 'string' && !localeCodes.includes(newLocale)) {
    i18n.setLocale(defaultLocale);
    return false;
  }

  i18n.setLocale(newLocale);
});

export default router;
