import { mailService } from '../services/mail-service.js'


export default {

    template: `
            <section v-if="user" class="mail-details">
                <p>From: {{user.name}}</p>
                <p>Subject: {{user.subject}}</p>
                <p>Message: {{user.body}}</p>
                <router-link to='/mail'>go back</router-link>
                
            </section>
    `,
    components: {},
    data() {
        return {
            user: null,
        }
    },
    created() {
        const id = this.$route.params.mailId;
        mailService.get(id)
            .then(user => this.user = user)
    },


}