const MainRoutes = {
  path: '/',
  meta: {
    requiresAuth: false,
  },
  component: async () => await import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'Goods List',
      path: '/goods',
      component: async () => await import('@/views/goods/index.vue'),
    },
    {
      name: 'Goods Detail',
      path: '/goods/detail/:id',
      component: async () => await import('@/views/goods/DetailView.vue'),
    },
  ],
};

export default MainRoutes;
