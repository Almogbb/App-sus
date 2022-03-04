import { router } from './router.js';
import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
import mailApp from './apps/mail/views/mail-app.cmp.js';
import notesApp from './apps/notes/views/notes-app.cmp.js'




const options = {
    template: `
        <section>
       <app-header />
       <!-- <router-view v-slot="{Component, route}">
            <transition 
           :enter-active-class="route.meta.enterClass"
           :leave-active-class="route.meta.leaveClass" mode="out-in">
               <component :is="Component"/>
            </transition>
       </router-view> -->
       <router-view/>
        <!-- <notes-app /> -->
       <app-footer />
    </section>
    `,
    components: {
        appHeader,
        appFooter,
        mailApp,
        notesApp
    }
}

const app = Vue.createApp(options);
app.use(router);
app.mount('#app');