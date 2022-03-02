

export default {
    props: ['notes'],
    template: `
        <section class="add-note">
            <input v-model="inputTxt" type="text" @blur="addNote(inputTxt)"
            placeholder="Add note"
            class="edit-note">
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            inputTxt: '',
        }
    },
    methods: {
        addNote(inputTxt) {
            if (!inputTxt) return
            console.log(inputTxt);
            this.$emit('addNote', this.inputTxt);
            this.inputTxt = '';
        }
    },
    computed: {},
}