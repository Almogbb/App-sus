// import notesPreview from './notes-preview.cmp.js'

export default {
    props: ['note'],
    template: `
        <section>
            <div contenteditable="true">{{note.info.txt}}</div>
    
        </section>
    `,
    components: {
        // notesPreview
    },
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},

}

// {
//     id: utilService.makeId(),
//     type: "note-txt",
//     isPinned: true,
//     info: {
//         txt: "Fullstack Me Baby!"
//     },
//     style: {
//         backgroundColor: "#888"
//     }
// },