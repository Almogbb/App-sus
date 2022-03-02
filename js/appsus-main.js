import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
import mailApp from './apps/mail/views/mail-app.cmp.js';
const options = {
    template: `
    <section>
       <app-header />
       <mail-app />
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
// app.use(router);
app.mount('#app');