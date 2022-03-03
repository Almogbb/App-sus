export default {
    // props: [""],
    template: `
        <section class="mail-filter margin-left padding-bottom">
        <label>
            Search
            <input @input="setFilter" type="text" v-model="filterBy.name " placeholder="Search...">
            </label>
        </section>
    `,
    components: {},
    data() {
        return {
            filterBy: {
                name: '',
                subject: '',
                type: '',
            }
        }
    },
    created() {},
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy });
        }
    },
    computed: {},
    unmounted() {},
}