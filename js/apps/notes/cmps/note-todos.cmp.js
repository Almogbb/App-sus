import { eventBus } from '../../../cmps/services/eventBus-service.js'

export default {
    props: ['note'],
    template: `
        <section>
        <div class="title" @blur="saveTitle(note.id,$event)" contenteditable="true">{{note.info.txt}}</div>
            <ul>
                <li @click="toggleCheck(todo.id,note.id)" v-for="(todo,idx) in note.info.todos" :class="markTodo" class="todoLine"> 
                    {{todo.txt}}
                </li>
            </ul>
            <!-- :style="todo.doneAt? 'text-decoration: line-through':''" -->
        </section>
    `,
    components: {},
    data() {
        return {
            isCheck: false,
        }
    },
    created() { },
    methods: {
        toggleCheck(todoId, noteId) {
            this.isCheck = !this.isCheck
            eventBus.emit('doneToDo', { todoId, noteId })
        }
    },
    computed: {
        markTodo() {
            return { check: this.isCheck }
        }
    },
    unmounted() { },
}


// {
//     id: utilService.makeId(),
//     type: "note-todos",
//     isPinned: false,
//     info: {
//         txt: "Get my stuff together",
//         todos: [
//             { txt: "Driving liscence", doneAt: null },
//             { txt: "Coding power", doneAt: 187111111 }
//         ]
//     },
//     style: {
//         backgroundColor: "#ffffff"
//     }