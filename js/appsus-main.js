import { router } from './router.js';
import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
import mailApp from './apps/mail/views/mail-app.cmp.js';





const options = {
    template: `
    <section>
       <app-header />
       <router-view />
       <app-footer />
    </section>
    `,
    components: {
        appHeader,
        appFooter,
        mailApp,
    }
}

const app = Vue.createApp(options);
app.use(router);
app.mount('#app');