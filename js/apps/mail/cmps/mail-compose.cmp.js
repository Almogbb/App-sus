export default {
    template: `
        <section class="mail-compose">
        <form @Submit.prevent="onSubmit" class="compose-modal flex flex-col" v-if="openCompose">
            <label id="label-msg">New Message</label>
        <input v-model="newMail.to" type="text"  placeholder="To">
        <input v-model="newMail.subject" type="text"  placeholder="Subject">
        <textarea v-model="newMail.content"  name="content" style="height:313px" style="resize:none"></textarea>
        <button type="submit" value="Send">Send</button> </button>
        </form>
         <button @click="openModal">Compose</button>
        </section>
    `,
    data() {
        return {
            openCompose: false,
            newMail: {
                id: null,
                to: '',
                subject: '',
                content: '',
                type: 'Send',
            }
        }
    },
    methods: {
        openModal() {
            this.openCompose = true
        },
        onSubmit() {
            this.$emit('sendMail', {...this.newMail });
            this.openCompose = false
        }
    },
}