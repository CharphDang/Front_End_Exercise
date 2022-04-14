import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/Menu',
      routes: [
        { path: '/', component: '@/pages/index' },
        {
          path: '/examplePage',
          component: '@/pages/ExamplePage',
          redirect: '/login',
        },
        { component: '@/pages/404' },
      ],
    },
  ],
  fastRefresh: {},
});
