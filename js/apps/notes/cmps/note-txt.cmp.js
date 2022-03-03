// import notesPreview from './notes-preview.cmp.js'
import { eventBus } from '../../../cmps/services/eventBus-service.js'

export default {
    props: ['note'],
    template: `
        <section>
            <div @blur="saveTitle(note.id,$event)" contenteditable="true">{{note.info.txt}}</div>

        </section>
    `,
    components: {
        // notesPreview
    },
    data() {
        return {}
    },
    created() { },
    methods: {
        saveTitle(id, ev) {
            // console.log(ev.currentTarget.textContent);
            let textValue = ev.currentTarget.textContent;
            console.log(id);
            console.log(textValue);
            eventBus.emit('saveTitle', { 'id': id, 'txt': textValue })
        }
    },
    computed: {},

}

// {
//     id: utilService.makeId(),
//     type: "note-txt",
//     isPinned: true,
//     info: {
//         txt: "Fullstack Me Baby!"
//     },
//     style: {
//         backgroundColor: "#888"
//     }
// },