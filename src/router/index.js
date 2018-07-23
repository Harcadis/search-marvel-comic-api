import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import comicInfo from '@/components/comicInfo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/comic/:comicInfo',
      name: 'comicInfo',
      component: comicInfo,
    }
  ],
});
