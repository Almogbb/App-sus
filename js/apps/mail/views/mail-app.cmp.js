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
            <mail-folder-list  @filteredByClick="filterByClick" :mails="mails" />
            <mail-filter @filtered="setFilter" />
            <mail-list @sendMailToArchived="sendMailToArchive" :mails="filteredMails" />
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
                // Note: `newValue` will be equal to `oldValue` here
                // on nested mutations as long as the object itself
                // hasn't been replaced.
            },
            deep: true
        }
    },

    methods: {
        getMails() {
            mailService.query()
                .then(mails => {
                    this.mails = mails;
                    this.filteredMails = mails.filter((mail) => mail.type === 'Inbox')
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
            mailService.save(mailId, this.mails)
                // .then(archive => console.log(archive))

        }
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
    unmounted() {},
}