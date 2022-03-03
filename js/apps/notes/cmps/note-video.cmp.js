export default {
    props: ['note'],
    template: `
        <section>
            <p>{{note.id}} </p>
            <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
        </section>
    `,
    components: {},
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}