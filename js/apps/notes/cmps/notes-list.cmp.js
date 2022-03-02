

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <article v-for="note in notes" :key="note.id" >
                <!-- <component is:></component> -->
                <div class="note" >
                    id: {{note.id}}
                    <!-- type: {{note.info}} -->
                    <div class="show-btn">
                        <button class="note-btn">paint</button>
                        <button class="note-btn">paint</button>
                        <button class="note-btn">paint</button>
                        <button class="note-btn">paint</button>
                        <button class="note-btn">paint</button>
                    
                    </div>
                </div>
            </article>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {

        }
    },
    methods: {},
    computed: {},
}