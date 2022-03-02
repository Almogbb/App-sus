import notesList from '../cmps/notes-list.cmp.js'
import { notesService } from '../services/notes-services.js'

export default {

    template: `
        <section class = "notes-app">
         
            <notes-list :notes="notes"/>
        </section>
    `,
    components: {
        notesList,
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
    methods: {},
    computed: {},
}