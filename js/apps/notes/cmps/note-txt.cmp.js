import { eventBus } from '../../../cmps/services/eventBus-service.js'

export default {
    props: ['note'],
    template: `
        <section>
            <div spellcheck="false" class="title" @blur="saveTitle(note.id,$event)" 
            contenteditable="true">{{note.info.txt}}</div>
        </section>
    `,
    components: {
    },
    data() {
        return {}
    },
    created() { },
    methods: {
        saveTitle(id, ev) {
            const textValue = ev.currentTarget.textContent;
            eventBus.emit('saveTitle', { 'id': id, 'txt': textValue })
        }
    },
    computed: {},
}
