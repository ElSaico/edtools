import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'pristine', component: () => import('pages/Pristines.vue') },
      { path: 'rares', component: () => import('pages/Rares.vue') },
      { path: 'res', component: () => import('pages/RES.vue') },
      { path: 'dist', component: () => import('pages/Distances.vue') },
      { path: 'miner', component: () => import('pages/MinersTool.vue') },
      { path: 'sphere', component: () => import('pages/Sphere.vue') },
      { path: 'list', component: () => import('pages/List.vue') },
      { path: 'expl', component: () => import('pages/RoadToRiches.vue') },
      { path: 'selenium', component: () => import('pages/Selenium.vue') },
      { path: 'pve', component: () => import('pages/Massacre.vue') },
      { path: 'hotspot', component: () => import('pages/Hotspots.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
