export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/product/:id',
    name: 'Products',
    icon: 'smile',
    component: '../components/ProductInfo/ProductInfo',
    hideInMenu: true,
  },
  {
    component: './404',
  },
];
