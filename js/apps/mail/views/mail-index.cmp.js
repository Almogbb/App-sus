import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.cmp.js'



export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <mail-list :users="users"/>
            
        </section>
    `,
    components: {
        mailList,
    },
    data() {
        return {
            users: [],
        }
    },
    created() {
        this.getUsers()
    },

    methods: {
        getUsers() {
            mailService.query()
                .then(users => this.users = users);
        },
    },
    computed: {},
    unmounted() {},
}