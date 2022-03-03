import notePreview from './notes-preview.cmp.js';
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <article v-for="note in notes" :key="note.id" >
                <!-- <component :is="note.type" :note="note"> </component> -->
                <note-preview @duplicate="duplicate" @removeNote="removeNote" :note="note"/>
            
            </article>
        </section>
    `,
    components: {
        notePreview,
        noteImg,
        noteVideo
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