import { notesService } from '../services/notes-services.js';
import { utilService } from '../../../cmps/services/util-service.js';
import notesList from '../cmps/notes-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import { eventBus } from '../../../cmps/services/eventBus-service.js';
import noteFilter from '../cmps/note-filter.cmp.js';



export default {

    template: `
        <section class="notes-app page-layout">
            <note-filter @filtered="setFilter"/>
            <note-add :notes="notes" @addNote="getNote"/>
            <notes-list @duplicate="duplicateNote" @removeNote="removeNote" :notes="carsForDisplay"/>
        </section>
    `,
    components: {
        notesList,
        noteAdd,
        noteFilter

    },
    data() {
        return {
            notes: null,
            id: '',
            filterBy: null,
        }
    },
    created() {
        notesService.query()
            .then(notes => this.notes = notes);
        this.unsubscribe = eventBus.on('saveTitle', this.saveTitle);
    },
    methods: {
        getNote(inputTxt, type) {
            notesService.addNote(inputTxt, type)
                .then(note => {
                    this.notes.push(note);
                    // eventBus.emit('show-msg', { txt: 'added', type: 'success' })
                })
            this.isAddReview = null
        },
        removeNote(id) {
            console.log('id for saba', id);
            notesService.removeNote(id, this.notes)
        },
        duplicateNote(id) {
            console.log('id for saba', id);
            notesService.duplicateNote(id, this.notes)
            // notesService.removeNote(id, this.notes)
        },
        saveTitle({ id, txt }) {
            console.log(id);
            console.log(txt);
            notesService.saveEdit(id, txt, this.notes)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        carsForDisplay() {
            if (!this.filterBy) return this.notes;
            const regex = new RegExp(this.filterBy.type, 'i');
            return this.notes.filter(note => regex.test(note.type));
        }
    },
    unmounted() {
        this.unsubscribe();
    }
}