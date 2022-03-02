import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailCompose from '../cmps/mail-compose.cmp.js'
import mailFolderList from '../cmps/mail-folder-list.cmp.js'



export default {
    // props: [""],
    template: `
        <section class="mail-index">
            <mail-compose @sendMail="sendMail" />
            <mail-folder-list  />
            <mail-filter @filtered="setFilter" />
            <mail-list :users="usersToShow" />
        </section>
    `,
    components: {
        mailList,
        mailFilter,
        mailCompose,
        mailFolderList,
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
        sendMail(newMail) {
            mailService.addMail(newMail)
                // .then(newMailAdd=> )
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