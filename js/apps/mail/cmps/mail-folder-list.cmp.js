export default {
    props: ['users'],
    template: `
        <section class="mail-folder-list absolute" >
          
            <p :key="type" v-for="button in buttons"><button @click="filterByFolder(button.type)">{{button.text}}</button></p>
        </section>
    `,
    components: {},
    data() {
        return {
            buttons: [
                { type: 'Inbox', text: 'Inbox' },
                { type: 'Starred', text: 'Starred' },
                { type: 'Snoozed', text: 'Snoozed' },
                { type: 'Send', text: 'Send' },
                { type: 'Drafts', text: 'Drafts' },
                { type: 'Notes', text: 'Notes' },
            ],
            isClick: false,
        }
    },
    methods: {
        filterByFolder(type) {
            this.$emit('filteredByClick', type)
        }
    },
}