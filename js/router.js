import aboutPage from './views/about-page.cmp.js'
import homePage from './views/home-page.cmp.js'
import mailApp from './apps/mail/views/mail-app.cmp.js';
import mailDetails from './apps/mail/views/mail-details.cmp.js'
import notesApp from './apps/notes/views/notes-app.cmp.js';




const routes = [

    {
        path: '/',
        component: homePage,
        meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    },
    {
        path: '/about',
        component: aboutPage,
        meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    },
    {
        path: '/mail',
        component: mailApp,
        meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    },
    {
        path: '/notes',
        component: notesApp,
        meta: {
            enterClass: 'animate__animated animate__fadeInLeft',
            leaveClass: 'animate__animated animate__fadeOutLeft'
        }
    },
    {
        path: '/mail/:mailId',
        component: mailDetails,
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