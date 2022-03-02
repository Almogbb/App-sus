import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
import mailIndex from './apps/mail/views/mail-index.cmp.js';
const options = {
    template: `
    <section>
       <app-header />
       <mail-index />
       <app-footer />
    </section>
    `,
    components: {
        appHeader,
        appFooter,
        mailIndex,
    }
}

const app = Vue.createApp(options);
// app.use(router);
app.mount('#app');