export default {
    // props: ['mail'],
    template: `
        <section class="mail-compose">
        <form @submit.prevent="onSubmit" v-if="openCompose" class="compose-modal flex flex-col">
        <label id="label-msg"for="fname">New Message</label>
        <input type="text" v-model="newMail.to" placeholder="To">
        <input type="text" v-model="newMail.subject" placeholder="Subject">
        <textarea v-model="newMail.content" placeholder="Write something.." style="height:200px" style="resize:none"></textarea>
      <input id="compose-btn" type="submit" value="Send">
        </form>
         <button  @click="openModal">Compose</button>
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