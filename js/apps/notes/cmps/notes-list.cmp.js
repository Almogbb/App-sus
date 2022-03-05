import notesPreview from './notes-preview.cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list note-list-layout">
            <article class= note-container v-for="note in notes" :key="note.id" >
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