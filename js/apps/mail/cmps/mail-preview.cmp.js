export default {
    props: ['user'],
    template: `
        <section class="user-preview">
            {{user.name}} |
            {{user.subject}} |
            {{user.body}} | 
        </section>
    `,
}