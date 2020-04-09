export default [
  {
    path: '/',
    // component: '@/layouts/index',
    menu: {
      name: 'setting', // 兼容此写法
      icon: 'smile',
    },
    routes: [{
      path: '/setting',
      component: '@/pages/setting',
      menu: {
        name: 'setting', // 兼容此写法
        icon: 'smile',
      },
    }, {
      path: '/dashboard',
      component: '@/pages/dashboard',
      menu: {
        name: '控制台', // 兼容此写法
        icon: 'smile',
      },
      access: 'admin'
    }, {
      path: '/',
      component: '@/pages/index',
    }]
  },
]
