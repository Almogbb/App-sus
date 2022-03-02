import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';

const options = {
    template: `
    <section>
       <app-header />
       
       <app-footer />
    </section>
    `,
    components: {
        appHeader,
        appFooter
    }
}

const app = Vue.createApp(options);
// app.use(router);
app.mount('#app');