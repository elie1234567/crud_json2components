import { createRouter, createWebHistory } from 'vue-router';
import CrudList from '@/components/crudlist.vue';
import AddCrud from '@/components/AddCrud.vue';
import ModCrud from '@/components/ModCrud.vue';

const routes = [
  {
    path: '/modcrud/:crudId',
    name: 'ModCrud',
    component: ModCrud
  },
  {
    path: '/list',
    name: 'CrudList',
    component: CrudList,
  },
  {
    path: '/add',
    name: 'AddCrud',
    component: AddCrud,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
