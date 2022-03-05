export default {
    props: ['mails'],
    template: `
        <section class="mail-folder-list absolute" >
            <div :key="button" v-for="button in buttons">
                
                <button :class="[showPicked ? 'bold': '', 'btn regular']"
                  @click="filterByFolder(button.type)"> <img :src="button.src" alt="">{{button.text}}</button>
            </div>
        </section>
    `,
    components: {},
    data() {
        return {
            showPicked: true,
            buttons: [
                { type: 'Inbox', text: 'Inbox', src: './icon/inbox.png' },
                { type: 'Starred', text: 'Starred', src: './icon/unstarred.png' },
                { type: 'Send', text: 'Sent', src: './icon/sent.png' },
                { type: 'Archive', text: 'Archive', src: './icon/archive.png' },
            ],
            isClick: false,
        }
    },
    methods: {
        filterByFolder(type) {
            this.$emit('filteredByClick', type)
        },
        toggle() {
            this.showPicked = !this.showPicked
        }
    },
}