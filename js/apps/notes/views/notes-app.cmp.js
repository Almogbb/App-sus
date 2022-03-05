import { eventBus } from '../../../cmps/services/eventBus-service.js';
import { notesService } from '../services/notes-services.js';
// import { utilService } from '../../../cmps/services/util-service.js';
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
            // pinnedNotes: null,
            // notesNotPinned: null,
        }
    },
    created() {
        this.getNotes()
        // notesService.query()
        //     .then(notes => this.notes = notes);
        // notesService.query()
        //     .then(notes => {
        //         this.pinnedNotes = notes.filter(note => note.isPinned)
        //         this.notesNotPinned = notes.filter(note => !note.isPinned)
        //     });

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
                    // console.log(note);
                    this.notes.push(note);
                    // eventBus.emit('show-msg', { txt: 'added', type: 'success' })
                })
            // this.isAddReview = null
        },
        removeNote(id) {
            console.log('id for saba', id);
            notesService.removeNote(id, this.notes)
                .then(notes => {
                    this.getNotes();
                    eventBus.emit('show-msg', { txt: 'Note removed succesfully' })
                })
        },
        duplicateNote(id) {
            console.log('id for saba', id);
            notesService.duplicateNote(id, this.notes)
            eventBus.emit('show-msg', { txt: 'Duplicated note was created' })
        },
        saveTitle({ id, txt }) {
            console.log(id);
            console.log(txt);
            notesService.saveEdit(id, txt, this.notes)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        saveClr(id) {
            console.log(id);
            notesService.saveClr(id, this.notes);
        },
        markTodo({ todoId, noteId }) {
            notesService.markTodo(todoId, noteId)
                .then(note => this.getNotes())
        },
        pinNote(id) {
            console.log(id);
            notesService.getNote(id)
            // var pinnedIdx = this.pinnedNotes.findIndex(note => note.id === id);
            // var notesPinnedIdx = this.notesNotPinned.findIndex(note => note.id === id);
            // if (pinnedIdx >= 0) {
            //     this.pinnedNotes[pinnedIdx].isPinned = !this.pinnedNotes[pinnedIdx].isPinned
            //     this.notesNotPinned.push(this.pinnedNotes[pinnedIdx])
            //     this.pinnedNotes.splice(pinnedIdx, 1)
            // } else {
            //     this.notesNotPinned[notesPinnedIdx].isPinned = !this.notesNotPinned[notesPinnedIdx].isPinned
            //     this.pinnedNotes.push(this.notesNotPinned[notesPinnedIdx])
            //     this.notesNotPinned.splice(notesPinnedIdx, 1)
            // }
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