import { useGlobal } from '@/store';
import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';

import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

/** Router Rules */
const routes: RouteRecordRaw[] = [
  MainRoutes,
  AuthRoutes,
  {
    path: '/:pathMatch(.*)*',
    component: async () => await import('@/views/authentication/Error.vue'),
  },
];

/** Vue Router */
const router: Router = createRouter({
  /**
   * History Mode
   *
   * @see {@link https://router.vuejs.org/guide/essentials/history-mode.html }
   */
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Global before guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards}
router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    // const globalStore = useGlobal();
    // Set CsrfToken
    // const authStore = useAuth();
    // const userStore = useUser();
    // await authStore.getCsrfToken();
    // // Check Auth
    // await authStore.checkAuth('accessToken', authStore.csrfToken);
    // // Set User Info
    // // Check if current route requires authentication
    // const requiresAuth = _to.matched.some(record => record.meta.requiresAuth);
    //
    // // If the user is not authenticated and the current route requires authentication, redirect to login
    // if (requiresAuth && !authStore.isAuth) {
    //   next('/auth/login');
    //   return;
    // }
    //
    // // User information settings
    // if (authStore.isAuth) {
    //   try {
    //     await userStore.setUserInfo();
    //   } catch (error) {
    //     // If user information cannot be retrieved, redirect to login
    //     next('/auth/login');
    //     return;
    //   }
    // }

    // Show Loading
    // comment out for https://github.com/logue/vite-vuetify-ts-starter/issues/16
    // globalStore.setLoading(true);

    // Hide snack bar
    // globalStore.setMessage('');
    next();
  }
);

// Global After Hooks
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks}
router.afterEach(() => {
  // const { setLoading } = useGlobal();
  //
  // // Hide Loading
  // setLoading(false);
});

export default router;
