import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home-view.vue";
import JobsView from '@/views/job-view.vue';
import NotFound from '@/views/not-found.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router;