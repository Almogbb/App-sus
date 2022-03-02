import mailList from '../cmps/mail-list.cmp.js'



export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <mail-list />
            
        </section>
    `,

    components: {},
    created() {},

    components: {
        mailList,
    },
    created() {},

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