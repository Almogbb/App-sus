export default {
    props: ['note'],
    template: `
        <section>
            <div contenteditable="true">{{note.info.txt}}</div>
            <iframe :src="note.info.url" width="100%"
            height="100"></iframe>
        </section>
    `,
    components: {},
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},
}


// {
//     id: utilService.makeId(),
//     type: "note-vid",
//     isPinned: false,
//     info: {
//         txt: "Best Video EVER!"
//     },
//     style: {
//         backgroundColor: "#ffffff"
//     }
// },