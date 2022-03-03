

export default {
    props: ['notes'],
    template: `
        <section class="add-note">
            <input v-model="inputTxt" type="text" @blur="addNote(inputTxt)"
            :placeholder="[[placeHolderTxt]]">
            <div class="add-note-btn">
                <button class="note-btn bottom-btn" @click="noteTypeTxt">Txt</button>
                <button class="note-btn bottom-btn" @click="noteTypeVid">YT</button>
                <button class="note-btn bottom-btn" @click="noteTypeImg">YT</button>
                <button class="note-btn bottom-btn" @click="noteTypeToDo">YT</button>
            </div>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            inputTxt: '',
            type: 'txt'
        }
    },
    methods: {
        addNote(inputTxt) {
            if (!inputTxt) return
            console.log(inputTxt);
            this.$emit('addNote', this.inputTxt);
            this.inputTxt = '';
        },
        noteTypeTxt() {
            this.type = 'txt';
            console.log(this.type);
        },
        noteTypeVid() {
            this.type = 'vid';
            console.log(this.type);
        },
        noteTypeImg() {
            this.type = 'img';
            console.log(this.type);
        },
        noteTypeToDo() {
            this.type = 'todo';
            console.log(this.type);
        },

    },
    computed: {
        placeHolderTxt() {
            // return this.type === 'txt' ? 'Add note...' : ''
            if (this.type === 'txt') return 'Add note...'
            else if (this.type === 'vid') return 'Enter video URL...'
            else if (this.type === 'img') return 'Enter img URL...'
            else if (this.type === 'todo') return 'Enter Todo list...'
        }
    },
}