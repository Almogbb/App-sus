import buttonCmp from "./button.cmp.js"

export default {
    // props: ['text'],
    template: `
        <section class="mail-folder-list absolute">
            
        <p><button-cmp text="inbox"/></p>
        <p><button-cmp text="Starred"/></p>
        <p><button-cmp text="Snoozed"></p>
        <p><button-cmp text="Sent"/></p>
        <p><button-cmp text="Drafts"/></p>
        <p><button-cmp text="Notes"/></p>

        </section>
    `,
    data() {
        return {
            isClick: false
        }
    },
    components: {
        buttonCmp,
    },
}