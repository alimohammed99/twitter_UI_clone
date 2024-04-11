import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Home',
            component: HomeView,
            iconClass: 'fas fa-home',
            mainMenu: true,
        },
        {
            path: '/explore',
            name: 'Explore',
            component: HomeView,
            mainMenu: true,
            // mainMenu and iconClass are custom properties added to the route object
            iconClass: 'fas fa-search'
        },
        {
            path: '/notifications',
            name: 'Notifications',
            component: HomeView,
            mainMenu: true,
            // mainMenu and iconClass are custom properties added to the route object
            iconClass: 'fas fa-bell'
        },
        {
            path: '/messages',
            name: 'Messages',
            component: HomeView,
            mainMenu: true,
            // mainMenu and iconClass are custom properties added to the route object
            iconClass: 'fas fa-envelope'
        },
        {
            path: '/profile',
            name: 'Profile',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AboutView.vue')
        },
    ]
})

export default router