
export default {
    props: ['notes'],
    template: `
        <section class="add-note">
            <input v-model="inputTxt" type="text"
            @blur="addNote(inputTxt)"
            :placeholder="[[placeHolderTxt]]">
            <div class="add-note-btn">
                <button :class="changeOpacityTxt" class="note-btn" @click="noteTypeTxt">
                    <img src="icon/font.png">
                </button>
                <button :class="changeOpacityVid" class="note-btn" @click="noteTypeVid">
                    <img src="icon/youtube.png">
                </button>
                <button :class="changeOpacityImg" class="note-btn" @click="noteTypeImg">
                    <img src="icon/picture.png">
                </button>
                <button :class="changeOpacityTodo" class="note-btn" @click="noteTypeToDo">
                    <img src="icon/to-do-list.png">
                </button>
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
            this.type = 'note-todos';
            console.log(this.type);
        },

    },
    computed: {
        placeHolderTxt() {
            if (this.type === 'note-txt') return 'Enter note...'
            else if (this.type === 'note-vid') return 'Enter video URL...'
            else if (this.type === 'note-img') return 'Enter image URL...'
            else if (this.type === 'note-todos') return 'Enter todo list (separated by comma)'
        },
        changeOpacityTxt() {
            if (this.type === 'note-txt') return 'opacity-show';
        },
        changeOpacityVid() {
            if (this.type === 'note-vid') return 'opacity-show';
        },
        changeOpacityImg() {
            if (this.type === 'note-img') return 'opacity-show';
        },
        changeOpacityTodo() {
            if (this.type === 'note-todos') return 'opacity-show';
        },
    },
}