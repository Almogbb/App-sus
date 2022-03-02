import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailCompose from '../cmps/mail-compose.cmp.js'



export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <mail-compose />
            <mail-filter @filtered="setFilter" />
            <mail-list :users="usersToShow" />
            
        </section>
    `,
    components: {
        mailList,
        mailFilter,
        mailCompose,
    },
    data() {
        return {
            users: [],
            filterBy: null,
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
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        usersToShow() {
            if (!this.filterBy) return this.users;
            const regex = new RegExp(this.filterBy.name, 'i');
            return this.users.filter((user) =>
                regex.test(user.name))

        }
    },
    unmounted() {},
}