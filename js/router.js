import aboutPage from './views/about-page.cmp.js'
import homePage from './views/home-page.cmp.js'
import mailApp from './apps/mail/views/mail-app.cmp.js';
import mailDetails from './apps/mail/views/mail-details.cmp.js'
import notesApp from './apps/notes/views/notes-app.cmp.js';




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
        path: '/mail',
        component: mailApp
    },
    {
        path: '/notes',
        component: notesApp
    },
    {
        path: '/mail/:mailId',
        component: mailDetails
    },

    // {
    //     path: '/mail',
    //     component: mailApp,
    //     children: [{
    //         path: 'Details',
    //         component: mailDetails
    //     }]
    // },
    // {
    //     path: '/notes',
    //     component: notesApp
    // },


]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});