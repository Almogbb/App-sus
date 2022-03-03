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
            <mail-folder-list  @filteredByClick="filterByClick" :users="users" />
            <mail-filter @filtered="setFilter" />
            <mail-list :users="filteredUsers" />
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
            sentFil: null,
            filteredUsers: [],
        }
    },
    created() {
        this.getUsers()
    },
    watch: {
        filteredUsers: {
            handler(newValue, oldValue) {
                if (newValue) {
                    this.filteredUsers = newValue
                }
                // Note: `newValue` will be equal to `oldValue` here
                // on nested mutations as long as the object itself
                // hasn't been replaced.
            },
            deep: true
        }
    },

    methods: {
        getUsers() {
            mailService.query()
                .then(users => {
                    this.users = users;
                    this.filteredUsers = users;
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        filterByClick(type) {
            this.filteredUsers = this.users.filter((user) => user.type === type)
        },
        sendMail(newMail) {
            mailService.addMail(newMail)
                .then(newMail => this.users.push(newMail))
        },
    },
    computed: {
        usersToShow() {
            if (!this.filterBy) return this.users;
            const regex = new RegExp(this.filterBy.name, 'i');
            return this.users.filter((user) =>
                regex.test(user.name)
            )

        },
        sentMail() {
            return this.users.filter((user) => {
                console.log(user.type);
            })
        },

    },
    unmounted() {},
}