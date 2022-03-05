import { eventBus } from '../../../cmps/services/eventBus-service.js';
import { notesService } from '../services/notes-services.js';
import notesList from '../cmps/notes-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import userMsg from '../cmps/user-msg.cmp.js';


export default {

    template: `
        <section class="notes-app page-layout">
            <note-filter @filtered="setFilter"/>
            <user-msg />
            <note-add :notes="notes" @addNote="addNote"/>
            <notes-list @duplicate="duplicateNote" @removeNote="removeNote" :notes="noteForDisplay"/>
        </section>
    `,
    components: {
        notesList,
        noteAdd,
        noteFilter,
        userMsg

    },
    data() {
        return {
            notes: null,
            id: '',
            filterBy: null,
        }
    },
    created() {
        this.getNotes()
        this.unsubscribe = eventBus.on('saveTitle', this.saveTitle);
        this.saveClr = eventBus.on('changeClr', this.saveClr);
        this.doneTodo = eventBus.on('doneToDo', this.markTodo);
    },
    methods: {
        getNotes() {
            notesService.query()
                .then(notes => this.notes = notes)
        },
        addNote(inputTxt, type) {
            notesService.addNote(inputTxt, type)
                .then(note => {
                    this.notes.push(note);
                })
        },
        removeNote(id) {
            notesService.removeNote(id, this.notes)
                .then(notes => {
                    this.getNotes();
                    eventBus.emit('show-msg', { txt: 'Note removed succesfully' })
                })
        },
        duplicateNote(id) {
            notesService.duplicateNote(id, this.notes)
            eventBus.emit('show-msg', { txt: 'Duplicated note was created' })
        },
        saveTitle({ id, txt }) {
            notesService.saveEdit(id, txt, this.notes)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        saveClr(id) {
            notesService.saveClr(id, this.notes);
        },
        markTodo({ todoId, noteId }) {
            notesService.markTodo(todoId, noteId)
                .then(note => this.getNotes())
        },
        pinNote(id) {
            notesService.getNote(id)
        }
    },
    computed: {
        noteForDisplay() {
            if (!this.filterBy) return this.notes;
            const regex = new RegExp(this.filterBy.type, 'i');
            return this.notes.filter(note => regex.test(note.type));
        }
    },
    unmounted() {
        this.unsubscribe();
        this.saveClr();
        this.doneTodo();
    }
}