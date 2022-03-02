import { notesService } from '../services/notes-services.js';
import { utilService } from '../../../cmps/services/util-service.js';
import notesList from '../cmps/notes-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';


export default {

    template: `
        <section class="notes-app">
            <note-add :notes="notes" @addNote="getNote"/>
            <notes-list @removeNote="removeNote" :notes="notes"/>
        </section>
    `,
    components: {
        notesList,
        noteAdd,
    },
    data() {
        return {
            notes: null,
        }
    },
    created() {
        notesService.query()
            .then(notes => this.notes = notes)
    },
    methods: {
        getNote(inputTxt) {
            notesService.addNote(inputTxt)
                .then(note => {
                    this.notes.push(note)
                    // eventBus.emit('show-msg', { txt: 'added', type: 'success' })
                })
            this.isAddReview = null
        },
        removeNote(id) {
            console.log('id for saba', id);
            notesService.removeNote(id, this.notes)
        }
    },
    computed: {},
}