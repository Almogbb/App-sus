export default {
    props: ['users'],
    template: `
        <section class="mail-list">
            <ul>
                <li v-for="user in users" :key="user.id">
                   <!-- <mail-preview />  -->
                    <button @click ="toDetails"></button>
                </li>

                <nav>
                    <router-link to="/mail/"></router-link>
                </nav>
            </ul>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {}
    },
    methods: {
        toDetails() {
            console.log('ss');
        }
    },
    computed: {},
    unmounted() { },
}



// email details = book details