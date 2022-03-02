export default {
    template: `
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
    `,
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        },
    }


}