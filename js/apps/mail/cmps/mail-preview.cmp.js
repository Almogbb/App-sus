export default {
    props: ['user', ],
    template: `
        <section :class="[user.isRead ? 'gray-bg' : 'bold white-bg','user-preview ell']">
           <router-link :to="'/mail/'+user.id"> {{user.name}}  |
            {{user.subject}} |
            <span class="text-muted regular ">{{user.body}}</span>  </router-link>
            <button @click="isRead" >{{user.isRead}}</button>
        </section>
    `,
    data() {
        return {}
    },
    methods: {
        isRead() {
            this.user.isRead = !this.user.isRead
        }
    },
}