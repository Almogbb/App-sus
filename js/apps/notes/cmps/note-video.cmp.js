import { eventBus } from '../../../cmps/services/eventBus-service.js'

export default {
    props: ['note'],
    template: `
        <section>
            <div @blur="saveTitle(note.id,$event)" contenteditable="true">{{note.info.txt}}</div>
            <iframe :src="note.info.url" width="100%"
            height="100"></iframe>
        </section>
    `,
    components: {},
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
//     type: "note-vid",
//     isPinned: false,
//     info: {
//         txt: "Best Video EVER!"
//     },
//     style: {
//         backgroundColor: "#ffffff"
//     }
// },