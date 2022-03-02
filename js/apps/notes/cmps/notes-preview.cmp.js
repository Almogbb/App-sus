

export default {
    props: ['note'],
    template: `
        <section>
            <div class="note " >
                <button class="note-btn" @click="removeNote(note.id)">X</button>
                <div contenteditable="true">
                    {{note.info.txt}}
                </div>
                <div class=" show-btn">
                    <button class="note-btn">img</button>
                    <button class="note-btn">img</button>
                    <button class="note-btn">img</button>
                    <button class="note-btn">img</button>
                    <button class="note-btn">img</button>
                </div>
            </div>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {}
    },
    methods: {
        removeNote(id) {
            console.log(id);
            this.$emit('removeNote', id)
        }
    },
    computed: {

    },

}