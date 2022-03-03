export default {
    template: `
      	<header class="light-gray">
		<div class="header-inner">
			<div class="logo">
				<img src="" alt="">
			</div>
			<div class="menu">
				<ul>
					<li><router-link to="/"><span>Home</span></router-link></li>
					<li><router-link to="/mail"><span>Mail</span></router-link></li>
					<li><router-link to="/about"><span>About</span></router-link></li>
					<li><router-link to="/notes"><span>Notes</span></router-link></li>
				</ul>
			</div>
		</div>
	</header>
        <!-- <header class="main-header space-between">
            <div class="logo">
                <h2>App-sus</h2>
            </div>
            <nav class="nav-bar">
              
            </nav>

        </header> -->
    `,
    components: {},
    data() {
        return {}
    },
    created() {},
    methods: {},
    computed: {},

}