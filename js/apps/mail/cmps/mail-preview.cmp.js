import { mailService } from '../services/mail-service.js'

export default {
    props: ['mail'],
    template: `
        <section :class="[mail.isRead ? 'light-gray text-muted open-sans' : 'bold open-sans white-bg','mail-preview ell']">
                        <span @click="starMail(mail.id)"><img :src="changeSourceStar" width="20" height="20" alt="" @click="imgClickedStar = !imgClickedStar" ></span>
                        
                        <router-link  @click="updateStatus(mail)" :to="'/mail/'+mail.id"> {{mail.name}}  
                            {{mail.subject}} 
                            <span class="text-muted regular ">{{mail.body}}</span>  
                            <span class="date-preview">

                                {{mail.date}}
                            </span>
                            </router-link>

                                <span v-if="mail.type === 'Archive'"  @click="deleteArchive(mail.id)">
                                    <img src="icon/delete.png" width="20" height="20" alt="">
                                </span>
                                <span v-else @click="sendToArchive(mail.id)">
                                    <img src="icon/archive.png" width="20" height="20" alt="">
                                </span>
                                <span @click="isRead">
                                    <img :src="changeSourceRead" width="20" height="20" alt="" @click="imgClickedRead = !imgClickedRead">
                                </span> 
                    
        </section>
    `,
    data() {
        return {
            imgClickedRead: false,
            imgClickedStar: false,
            imgSourceStar: 'icon/unstarred.png',
            imageSourceRead: 'icon/read.png',
            urls: ['icon/read.png', 'icon/unread.png'],
            currentUrl: 'icon/read.png',
        }
    },
    // watch: {
    //     mail: {
    //         handler(newValue, oldValue) {
    //             if (newValue) {
    //                 this.mail = newValue
    //             }
    //         }
    //     }
    methods: {
        isRead() {
            this.mail.isRead = !this.mail.isRead
        },
        sendToArchive(mailId) {
            this.$emit('sendMailToArchive', mailId)
        },
        deleteArchive(mailId) {
            this.$emit('deleteArchive', mailId)
        },
        starMail(mailId) {
            this.$emit('starredMail', mailId)
        },
        updateStatus(mail) {
            mailService.updateStatusMail(mail)
        }
    },
    computed: {
        changeSourceRead() {
            return this.imgClickedRead ? 'icon/unread.png' : 'icon/read.png'
        },
        changeSourceStar() {
            return this.imgClickedStar ? 'icon/starred.png' : 'icon/unstarred.png'
        }
    },
}