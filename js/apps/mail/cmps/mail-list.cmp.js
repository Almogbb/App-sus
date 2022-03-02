export default {
    props: ['users'],
    template: `
        <section class="mail-list">
            <ul>
                <li v-for="user in users" :key="user.id">
                   <!-- <mail-preview />  -->
                </li>
            </ul>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {}
    },
    methods: {},
    computed: {},
    unmounted() { },
}



// email details = book details