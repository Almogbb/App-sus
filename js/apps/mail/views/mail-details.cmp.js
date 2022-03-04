import { mailService } from '../services/mail-service.js'
import mailFolderList from '../cmps/mail-folder-list.cmp.js';


export default {

    template: `
    <!-- <mailFolderList></mailFolderList> -->
        <section v-if="user" class="mail-details">
            <p>From: {{user.name}}</p>
            <p>Subject: {{user.subject}}</p>
            <p>Message: {{user.body}}</p>
            <router-link to='/mail'>go back</router-link>
               
        </section>
    `,
    components: {
        mailFolderList,
    },
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
    methods: {},
    computed: {},


}


// • Routable component (page)
// • show the entire email
// • Allow deleting an email (using the service)
// • Allow navigating back to list