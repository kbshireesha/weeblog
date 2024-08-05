import { createRouter, createWebHistory } from 'vue-router';
import BlogListView from '../views/BlogListView.vue';
import BlogDetailView from '../views/BlogDetailView.vue';
import BlogFormView from '../views/BlogFormView.vue';

const routes = [
    { path: '/', component: BlogListView },
    { path: '/blogs', component: BlogListView },
    { path: '/blogs/:id', component: BlogDetailView },
    { path: '/create', component: BlogFormView },
    { path: '/edit/:id', component: BlogFormView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
