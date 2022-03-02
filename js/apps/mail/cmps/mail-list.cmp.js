import mailPreview from "./mail-preview.cmp.js"

export default {
    props: ['users'],
    template: `
        <section class="mail-list">
            <ul>
                <li v-for="user in users" :key="user.id">
                   <mail-preview :user="user" @selectUser="selectUser(user)" /> 
                </li>
            </ul>
        </section>
    `,
    components: {
        mailPreview,
    },

    data() {
        return {}
    },
    created() {},
    methods: {
        selectUser(user) {
            this.$emit('selectUser', user)
        }
    },
    computed: {},
    unmounted() {},
}



// email details = book details