import noteImg from './note-img.cmp.js';

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <div class="note" :class="boldNote">
                <div contenteditable="true">{{note.info.txt}}</div>
                <div class="btn-group show-btn">
                    <button class="note-btn top-btn remove" @click="removeNote(note.id)">X</button>
                    <button class="note-btn bottom-btn pinned">
                        <img src="icon/pin.png"></button>
                    <button title="mark note" class="note-btn top-btn mark" :class="markBtn" @click="highLightNote"><img src="icon/check.png"></button>
                    <button class="note-btn bottom-btn duplicate" @click="duplicate(note.id)"><img src="icon/duplicate.png"></button>
                    <button class="note-btn bottom-btn">img</button>
                    <button class="note-btn bottom-btn">img</button>
                    <button class="note-btn bottom-btn">img</button>
                </div>
            </div>
        </section>
    `,
    components: {
        noteImg
    },
    created() { },
    data() {
        return {
            isHighLight: false,
        }
    },
    methods: {
        removeNote(id) {
            console.log(id);
            this.$emit('removeNote', id)
        },
        duplicate(id) {
            this.$emit('duplicate', id)
        },
        highLightNote() {
            this.isHighLight = !this.isHighLight;
            console.log(this.isHighLight);
        }
    },
    computed: {
        boldNote() {
            return { boldNote: this.isHighLight, }
        },
        markBtn() {
            return { 'mark-highlight': this.isHighLight }
        }
    },

}