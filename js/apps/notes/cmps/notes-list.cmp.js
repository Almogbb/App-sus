import notesPreview from './notes-preview.cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list note-list-layout">
            <article class= note-container v-for="note in notes" :key="note.id" >
                <notes-preview @duplicate="duplicate" @removeNote="removeNote" :note="note"/>
            </article>
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
            this.$emit('removeNote', id)
        },
        duplicate(id) {
            this.$emit('duplicate', id)
        },
    },
    computed: {},
}