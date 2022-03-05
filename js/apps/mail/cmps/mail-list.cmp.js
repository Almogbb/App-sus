import mailPreview from "./mail-preview.cmp.js"

export default {
    props: ['mails'],
    template: `
        <section class="main-list margin-left">
            <ul class="mail-list">
                <li v-for="mail in mails" :key="mail.id">
                   <mail-preview :mail="mail" @deleteArchive="deleteArchived" @sendMailToArchive="sendMailToArchives(mail.id)" @selectUser="selectMail(mail)" @starredMail="starMail(mail.id)" /> 
                </li>
            </ul>
        </section>
    `,
    components: {
        mailPreview,
    },

    data() {
        return {}
    },
    created() {},
    methods: {
        selectUser(mail) {
            this.$emit('selectMail', mail)
        },
        sendMailToArchives(mailId) {
            this.$emit('sendMailToArchived', mailId)
        },
        deleteArchived(mailId) {
            this.$emit('deleteArchive', mailId)
        },
        starMail(mailId) {
            this.$emit('starredMail', mailId)
        },
        // updateStatus(mail) {
        //     debugger
        //     this.$emit('updateStatus', mail)
        // }

    },
    computed: {},
    unmounted() {},
}



// email details = book details