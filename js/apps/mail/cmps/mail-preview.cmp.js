export default {
    props: ['mail'],
    template: `
        <section :class="[mail.isdRead ? 'gray-bg' : 'bold open-sans white-bg','mail-preview ell']">
            <!-- <span> -->
                <div class="mail-preview-span">
                        <span><img src="../icon/unstarred.png" width="20" height="20" alt="">|</span>
                        <router-link :to="'/mail/'+mail.id"> {{mail.name}}  |
                            {{mail.subject}} |
                            <span class="text-muted regular ">{{mail.body}}</span>  
                            <span class="date-preview">

                                {{mail.date}}
                            </span>
                            </router-link>
                            <span  v-if="mail.type === 'Archive'"  @click="deleteArchive(mail.id)">
                                <img src="../icon/delete.png" width="20" height="20" alt="">
                            </span>
                        <span v-else @click="sendToArchive(mail.id)">
                            <img src="../icon/archive.png" width="20" height="20" alt="">
                        </span>
                            <span>
                                <img :src="changeSource" width="20" height="20" alt="" @click="imgClicked = !imgClicked">
                            </span> 
                    </div>
                <!-- </span> -->
                    
        </section>
    `,
    data() {
        return {
            imgClicked: false,
            imageSource: '../icon/read.png',
            urls: ['../icon/read.png', '../icon/unread.png'],
            currentUrl: '../icon/read.png',
        }
    },
    methods: {
        isRead() {
            this.mail.isRead = !this.mail.isRead
        },
        sendToArchive(mailId) {
            console.log('something archive');
            this.$emit('sendMailToArchive', mailId)
        },
        deleteArchive(mailId) {
            console.log('something delete');
            this.$emit('deleteArchive', mailId)
        }
    },
    computed: {
        changeSource() {
            return this.imgClicked ? '../icon/unread.png' : '../icon/read.png'
        }
    },
}