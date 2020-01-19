import RestaurantCalculator from './components/RestaurantCalculator.vue';
import WeightCalculator from './components/WeightCalculator.vue';

export default {
  mode: 'history',
  linkActiveClass: 'bg-gray-800',
  routes: [
    {
      path: '/',
      component: RestaurantCalculator,
      name: 'restaurant-calculator',
    },
    {
      path: '/weight-calculator',
      component: WeightCalculator,
      name: 'weight-calculator',
    },
    { path: '*', redirect: { name: 'home' }}
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
}
