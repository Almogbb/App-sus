import notePreview from './notes-preview.cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <article v-for="note in notes" :key="note.id" >
                <note-preview @removeNote="removeNote" :note="note"/>
            </article>
        </section>
    `,
    components: {
        notePreview
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
        }
    },
    computed: {},
}