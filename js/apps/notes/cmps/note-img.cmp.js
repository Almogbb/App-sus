import { eventBus } from '../../../cmps/services/eventBus-service.js';

export default {
    props: ['note'],
    template: `
        <section>
            <div class="title" @blur="saveTitle(note.id,$event)" contenteditable="true">{{note.info.txt}}</div>
            <img :src="note.info.url">
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
    computed: {
        // showImg() {
        //     return this.note.info.url
        // }
    },

}

// {
//     id: utilService.makeId(),
//     type: "note-img",
//     info: {
//         url: "http://some-img/me",
//         title: "Bobi and Me"
//     },
//     style: {
//         backgroundColor: "#00d"
//     }
// },