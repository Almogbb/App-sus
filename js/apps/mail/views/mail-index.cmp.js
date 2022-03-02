<<<<<<< HEAD
=======
import mailList from '../cmps/mail-list.cmp.js'
// import { ma }

>>>>>>> b83a2fc41658f1ee3c9d6726d2e70299e2e90c0e
export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <mail-list />
            
        </section>
    `,
<<<<<<< HEAD
    components: {},
    created() {},
=======
    components: {
        mailList,
    },
    created() { },
>>>>>>> b83a2fc41658f1ee3c9d6726d2e70299e2e90c0e
    data() {
        return {
            email: '',
        }
    },
    methods: {

    },
    computed: {},
    unmounted() {},
}