

export default {
    template: `
        <header class="main-header">
            <div class="logo">
                <h2>App-sus</h2>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/books">Books</router-link>
                <router-link to="/mail">Mail</router-link>
            </nav>

        </header>
    `,
    components: {},
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},

}