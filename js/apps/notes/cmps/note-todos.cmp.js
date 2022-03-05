import { eventBus } from '../../../cmps/services/eventBus-service.js'

export default {
    props: ['note'],
    template: `
        <section>
        <div class="title" @blur="saveTitle(note.id,$event)" contenteditable="true">{{note.info.txt}}</div>
            <ul>
                <li @click="toggleCheck(todo.id,note.id)" v-for="(todo,idx) in note.info.todos" :key="todo.id" :style="todo.doneAt? 'text-decoration: line-through':''" class="todoLine"> 
                    {{todo.txt}}
                </li>
            </ul>
        </section>
    `,
    components: {},
    data() {
        return {
            isCheck: false,
            id: null,
            todo: ''
        }
    },
    created() { },
    methods: {
        toggleCheck(todoId, noteId) {
            this.isCheck = !this.isCheck;
            eventBus.emit('doneToDo', { todoId, noteId })
        },
        saveTitle(id, ev) {
            const textValue = ev.currentTarget.textContent;
            eventBus.emit('saveTitle', { 'id': id, 'txt': textValue })
        }
    },
    computed: {},
}
