export default {
    props: ['user'],
    template: `
        <section class="user-preview">
           <router-link :to="'/mail/'+user.id"> {{user.name}}  |
            {{user.subject}} |
            {{user.body}}  </router-link>
        </section>
    `,
    data() {
        return {}
    },
    methods: {

    },
}