import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home-view.vue";
import JobsView from '@/views/jobs-view.vue';
import NotFound from '@/views/not-found.vue';
import JobView from '@/views/job-view.vue';

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
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router;