import RootView from '@/layouts/RootView'
import RouteView from '@/layouts/RouteView'
const routes = [
  {
    path: '/',
    component: RootView,
    children: [
      {
        path: '',
        name: 'IndexPage',
        component: () => import('@/pages/index/index'),
        meta: { title: 'インデックス', icon: 'ios-speedometer-outline'}
      },
    ]
  },
  {
    path: '*',
    component: () => import('@/pages/error/404')
  }
];

export default routes;
