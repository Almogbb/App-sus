import mailApp from './apps/mail/views/mail-app.cmp.js';
import mailDetails from './apps/mail/views/mail-details.cmp.js'




const routes = [

    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/books',
        component: bookApp
    },
    {
        path: '/mail',
        component: mailApp,
        children: [
            {
                path: 'Details',
                component: mailDetails
            }
        ]
    },
    // {
    //     path: '/notes',
    //     component: notesApp
    // },
    {
        path: '/',
        component: homePage
    },

]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});