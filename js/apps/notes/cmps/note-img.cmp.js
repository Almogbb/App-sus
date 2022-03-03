export default {
    props: ['note'],
    template: `
        <section class="note">
            <p>{{note.info.title}}</p>
            <img src="note.info.url">
        </section>
    `,
    components: {},
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {
        showImg() {
            return 'note.info.url'
        }
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