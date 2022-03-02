export default {
    props: ['user'],
    template: `
        <section class="user-preview ell">
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