export default {
    props: ['mails'],
    template: `
        <section class="mail-folder-list absolute" >
            <div @click="activateButton(button)" :key="button" v-for="button in buttons">
                
                <button :class="[button.isActive ? 'folder-list' : '', 'btn regular']"
                  @click="filterByFolder(button.type)"> <img :src="button.src" alt="">{{button.text}}</button>
            </div>
        </section>
    `,
    components: {},
    data() {
        return {
            showPicked: true,
            buttons: [
                { type: 'Inbox', text: 'Inbox', src: './icon/inbox.png', isActive: true },
                { type: 'Starred', text: 'Starred', src: './icon/unstarred.png', isActive: false },
                { type: 'Send', text: 'Sent', src: './icon/sent.png', isActive: false },
                { type: 'Archive', text: 'Archive', src: './icon/archive.png', isActive: false },
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
        },
        activateButton(activatedButton) {
            for (let button of this.buttons) {
                button.isActive = button === activatedButton
            }
        },
    },
}