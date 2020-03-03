import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Chat from '@/components/Chat';
import Raw from '@/components/Raw';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    { path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
    },
    {
      path: '/raw',
      name: 'Raw',
      component: Raw,
    },
  ],
});
