import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: () => {
            return { name: 'home' };
        },
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [


            {
                path: 'ui-ux',
                name: 'home.ui-ux',
                component: () => import('@/views/UiUx.vue')

            },
            {
                path: 'graphic-design',
                component: () => import('@/views/graphicDesign/Index.vue'),
                children:
                    [
                        {
                            path: '',
                            name: 'home.graphic-design.flyers',
                            component: () => import('@/views/graphicDesign/tabs/Flyers.vue')
                        },
                        {
                            path: 'logos',
                            name: 'home.graphic-design.logos',
                            component: () => import('@/views/graphicDesign/tabs/Logos.vue')
                        },
                        {
                            path: 'catalog',
                            name: 'home.graphic-design.catalogs',
                            component: () => import('@/views/graphicDesign/tabs/Catalogs.vue')
                        }
                    ]
            },
            {
                name: 'home.resume',
                path: 'resume',
                component: () => import('@/views/Resume.vue')

            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkExactActiveClass: 'active'
})

export default router;