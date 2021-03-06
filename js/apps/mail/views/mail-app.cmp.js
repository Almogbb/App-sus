import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailCompose from '../cmps/mail-compose.cmp.js'
import mailFolderList from '../cmps/mail-folder-list.cmp.js'
import mailDetails from './mail-details.cmp.js'


export default {
    template: `
        <section class="mail-app">
            <mail-compose @sendMail="sendMail" />
            <mail-folder-list  @filteredByClick="filterByClick" :mails="mails" />
            <mail-filter @filtered="setFilter" />
            <mail-list  @deleteArchive="deleteArchived" @sendMailToArchived="sendMailToArchive" :mails="filteredMails" @starredMail="starMail"/>

        </section>
    `,
    components: {
        mailList,
        mailFilter,
        mailCompose,
        mailFolderList,
        mailDetails,

    },
    data() {
        return {
            mails: [],
            filterBy: null,
            sentFil: null,
            filteredMails: [],
        }
    },
    created() {
        this.getMails()
    },
    watch: {
        filteredMails: {
            immediate: true,
            handler(newValue, oldValue) {
                if (newValue) {
                    this.filteredMails = newValue
                }
            },
            deep: true
        }
    },

    methods: {
        getMails() {
            mailService.query()
                .then(mails => {
                    this.mails = mails;
                    this.filteredMails = mails.filter((mail) =>
                        mail.type === 'Inbox'
                    )
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        filterByClick(type) {
            this.filteredMails = this.mails.filter((mail) => mail.type === type)
        },
        sendMail(newMail) {
            mailService.addMail(newMail)
                .then(mail => this.mails.push(mail))
        },
        sendMailToArchive(mailId) {
            mailService.sendMailToArchive(mailId, this.mails)
                .then(mail => this.getMails())

        },
        deleteArchived(mailId) {
            mailService.remove(mailId)
                .then(this.getMails())

        },
        starMail(mailId) {
            console.log(mailId);
            mailService.starMail(mailId, this.filteredMails)
                .then(mail => this.mails)

        },
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const regex = new RegExp(this.filterBy.name, 'i');
            let mails = this.mails;
            mails = this.mails.filter((mail) =>
                regex.test(mail.name)
            )

        },
    },
}