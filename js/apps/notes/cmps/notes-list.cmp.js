import notesPreview from './notes-preview.cmp.js';
// import noteImg from './note-img.cmp.js';
// import noteVid from './note-video.cmp.js';
// import noteTxt from './note-txt.cmp.js';
// import noteTodos from './note-todos.cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <article v-for="note in notes" :key="note.id" >
                <notes-preview @duplicate="duplicate" @removeNote="removeNote" :note="note"/>
            </article>
            <!-- <article v-if="notesPinned" v-for="note in notesPinned" :key="note.id" >
                <notes-preview @duplicate="duplicate" @removeNote="removeNote" :note="note"/>
            </article>
            <article v-if="notesNotPinned" v-for="note in notesNotPinned" :key="note.id" >
                <notes-preview @duplicate="duplicate" @removeNote="removeNote" :note="note"/>
            </article> -->
        </section>
    `,
    components: {
        notesPreview,
        // noteImg,
        // noteVid,
        // noteTxt,
        // noteTodos
    },
    created() { },
    data() {
        return {

        }
    },
    methods: {
        removeNote(id) {
            console.log('id from father', id);
            this.$emit('removeNote', id)
        },
        duplicate(id) {
            console.log('id from father', id);
            this.$emit('duplicate', id)
        },
    },
    computed: {},
}