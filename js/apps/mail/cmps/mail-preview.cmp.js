export default {
    props: ['user'],
    template: `
        <section @click="selectUser" class="user-preview">
            {{user.name}} 
            {{user.subject}} |
            {{user.body}} | 
            <router-link :to="'/mail/'+user.id">Details</router-link>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        selectUser() {
            this.$emit('selectUser', this.user)
        },
    },
}