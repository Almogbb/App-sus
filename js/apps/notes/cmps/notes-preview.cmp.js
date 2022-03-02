

export default {
    props: ['note'],
    template: `
        <section>
            <div class="note " >
                <button class="note-btn" @click="removeNote(note.id)">X</button>
                <button class="note-btn pinned">+</button>
                
                <div contenteditable="true">
                    <!-- <components is></components> -->
                    {{note.info.txt}}
                </div>
                <div class="btn-group show-btn">
                    <button class="note-btn" @click="duplicate(note.id)">Dup</button>
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
        return {

        }
    },
    methods: {
        removeNote(id) {
            console.log(id);
            this.$emit('removeNote', id)
        },
        duplicate(id) {
            this.$emit('duplicate', id)
        }
    },
    computed: {

    },

}