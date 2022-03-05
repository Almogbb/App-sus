export default {
    template: `
      	<header class="light-gray">
		<div class="header-inner">
			<div class="logo">
				<img src="icon/app-sus.png" alt="" height="110" width="150">
			</div>
			<div  :class="[openNav ? 'btn-menu' : '', 'menu']">
                    <ul>
                        <li v-for="button in buttons" :key="button" @click="activateButton(button)" :class="{ 'nav-bar-menu' : button.isActive }">
                            <router-link :to="button.to">{{button.text}} </router-link>
                        </li>
                    </ul>
			</div>
            <button  class="btn-menu " @click="toggleMenu">☰</button>
		</div>
	</header>
    `,
    components: {},
    data() {
        return {
            buttons: [
                { isActive: true, text: 'Home', to: '/' },
                { isActive: false, text: 'Mail', to: '/mail' },
                { isActive: false, text: 'Notes', to: '/Notes' },
                { isActive: false, text: 'About', to: '/about' },
            ],
            isClicked: [],
            menuSelect: null,
            menuSelect1: null,
            openNav: false
        }
    },

    created() {},
    methods: {
        toggleMenu() {
            this.openNav = !this.openNav
        },
        toggleSelect() {
            this.menuSelect = !this.menuSelect
        },
        toggleSelect1() {
            this.menuSelect1 = !this.menuSelect1
        },
        activateButton(activatedButton) {
            for (let button of this.buttons) {
                button.isActive = button === activatedButton
            }
        },
    }
}