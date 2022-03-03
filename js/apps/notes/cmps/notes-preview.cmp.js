import noteImg from './note-img.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteVid from './note-video.cmp.js';

export default {
    props: ['note'],
    template: `
        
        <div class="note" :class="boldNote" :style="{'background-color':   fillColor}">
            <component :is="note.type" :note="note" ></component>
            <div class="btn-group show-btn">
                <button class="note-btn top-btn remove" @click="removeNote(note.id)">X</button>
                <a class="note-btn bottom-btn pinned">
                    <img src="icon/pin.png"></a>
                <a title="mark note" class="note-btn top-btn mark" :class="markBtn" @click="highLightNote"><img src="icon/check.png"></a>
                <a class="note-btn bottom-btn duplicate" @click="duplicate(note.id)"><img src="icon/duplicate.png"></a>
                <a class="note-btn bottom-btn pos" @click=changeClr>clr</a>
                <a class="note-btn bottom-btn">img</a>
                <a class="note-btn bottom-btn">img</a>
            </div>
            <div v-if="isClrClicked" class="clr-group">
                <div class="round light-grey"></div>
                <div class="round light-brown"></div>
                <div class="round light-pink"></div>
                <div class="round light-purple"></div>
                <div class="round blue"></div>
                <div class="round light-blue" ></div>
                <div class="round turquoise"></div>
                <div class="round light-green"></div>
                <div class="round yellow"></div>
                <div class="round orange"></div>
                <div class="round light-red"></div>
            </div>
        </div>
        
        <!-- <pre>
                - FIX EVENT BUS FOR NOTE WHEN REMOVE AND MORE
                - try to fix vid
                - FIX ENTER TITLE FOR VID AND IMG
                - FIX X, V, PIN, CLR INSIDE NOTE 
    
            </pre> -->
       
    `,
    components: {
        noteImg,
        noteTxt,
        noteVid
    },
    created() { },
    data() {
        return {
            isHighLight: false,
            isClrClicked: false,
        }
    },
    methods: {
        removeNote(id) {
            console.log(id);
            this.$emit('removeNote', id)
        },
        duplicate(id) {
            this.$emit('duplicate', id)
        },
        highLightNote() {
            this.isHighLight = !this.isHighLight;
            console.log(this.isHighLight);
        },
        changeClr() {
            this.isClrClicked = !this.isClrClicked;
        },
        setGrey(id) {
            console.log(id);

        }
    },
    computed: {
        boldNote() {
            return { boldNote: this.isHighLight, }
        },
        fillColor() {
            return this.note.style.backgroundColor
        },
        markBtn() {
            return { 'mark-highlight': this.isHighLight }
        }
    },

}