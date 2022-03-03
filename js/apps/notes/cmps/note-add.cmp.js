

export default {
    props: ['notes'],
    template: `
        <section class="add-note">
            <input v-model="inputTxt" type="text" @blur="addNote(inputTxt)"
            :placeholder="[[placeHolderTxt]]">
            <div class="add-note-btn">
                <button class="note-btn bottom-btn" @click="noteTypeTxt">Txt</button>
                <button class="note-btn bottom-btn" @click="noteTypeVid">YT</button>
                <button class="note-btn bottom-btn" @click="noteTypeImg">IMG</button>
                <button class="note-btn bottom-btn" @click="noteTypeToDo">todo</button>
            </div>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            inputTxt: '',
            type: 'note-txt'
        }
    },
    methods: {
        addNote(inputTxt) {
            if (!inputTxt) return
            console.log(inputTxt);
            this.$emit('addNote', this.inputTxt, this.type);
            this.inputTxt = '';
        },
        noteTypeTxt() {
            this.type = 'note-txt';
            console.log(this.type);
        },
        noteTypeVid() {
            this.type = 'note-vid';
            console.log(this.type);
        },
        noteTypeImg() {
            this.type = 'note-img';
            console.log(this.type);
        },
        noteTypeToDo() {
            this.type = 'note-todo';
            console.log(this.type);
        },

    },
    computed: {
        placeHolderTxt() {
            // return this.type === 'txt' ? 'Add note...' : ''
            if (this.type === 'note-txt') return 'Add note...'
            else if (this.type === 'note-vid') return 'Enter video URL...'
            else if (this.type === 'note-img') return 'Enter img URL...'
            else if (this.type === 'note-todo') return 'Enter Todo list...'
        }
    },
}