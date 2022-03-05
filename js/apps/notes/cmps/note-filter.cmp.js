export default {
    // props: [""],
    template: `
        <section class="note-filter">
            <label>
                <input list="type" @input="setFilter" 
                    type="search" 
                    v-model="filterBy.type" 
                    placeholder=" Serach by type"
                />
                <datalist id="type">
                    <!-- <option value="select"></option> -->
                    <option value="note-txt">Text</option>
                    <option value="note-vid">Video</option>
                    <option value="note-img">Image</option>
                    <option value="note-todo">Todo</option>
                </datalist>
              
            </label>
        </section>
    `,
    components: {},
    data() {
        return {
            filterBy: {
                type: null
            }
        }
    },
    created() { },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy })
        }
    },
    computed: {},
}