import mailList from '../cmps/mail-list.cmp.js'
// import { ma }

export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <mail-list />
            
        </section>
    `,
    components: {
        mailList,
    },
    created() { },
    data() {
        return {
            email: '',
        }
    },
    methods: {

    },
    computed: {},
    unmounted() { },
}