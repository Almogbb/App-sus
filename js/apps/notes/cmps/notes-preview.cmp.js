import { eventBus } from '../../../cmps/services/eventBus-service.js';
import noteImg from './note-img.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteVid from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';
// import noteEdit from './note-edit.cmp.js';

export default {
    props: ['note'],
    template: `
        
        <div class="note" :class="boldNote" :style="{backgroundColor:fillColor}">
            <!-- <component v-if="isPinned" :is="note.type" :note="note" ></component> -->
        <!-- :style="{'background-color':fillColor}" -->
            <component :is="note.type" :note="note" ></component>
            <div class="btn-group show-btn">
                <button class="note-btn top-btn remove" @click="removeNote(note.id)">X</button>
                <a @click="changePin(note.id)" class="note-btn bottom-btn pinned">
                    <img src="icon/pin.png"></a>
                <a title="mark note" class="note-btn top-btn mark" :class="markBtn" 
                @click="highLightNote"><img src="icon/check.png"></a>
                <a class="note-btn bottom-btn duplicate" @click="duplicate(note.id)">
                    <img src="icon/duplicate.png"></a>
                <a class="note-btn bottom-btn pos" @click=changeClr>
                    <img src="icon/color-palette.png"></a>
                <a class="note-btn bottom-btn">img</a>
                <a class="note-btn bottom-btn">img</a>
            </div>
            <div v-if="isClrClicked" class="clr-group">
                <div @click="setGrey(note.id)" class="round light-grey"></div>
                <div @click="setBrown(note.id)" class="round light-brown"></div>
                <div @click="setPink(note.id)" class="round light-pink"></div>
                <div @click="setPurple(note.id)" class="round light-purple"></div>
                <div @click="setBlue(note.id)" class="round blue"></div>
                <div @click="setLightBlue(note.id)" class="round light-blue" ></div>
                <div @click="setTurquoise(note.id)" class="round turquoise"></div>
                <div @click="setGreen(note.id)" class="round light-green"></div>
                <div @click="setYellow(note.id)" class="round yellow"></div>
                <div @click="setOrange(note.id)" class="round orange"></div>
                <div @click="setRed(note.id)" class="round light-red"></div>
            </div>
        </div>
        
        <!-- <pre>
                - FIX EVENT BUS FOR NOTE WHEN REMOVE AND MORE
                - try to fix vid
                - FIX ENTER TITLE FOR VID AND IMG - DONE
                - FIX X, V, PIN, CLR INSIDE NOTE 
    
            </pre> -->
       
    `,
    components: {
        noteImg,
        noteTxt,
        noteVid,
        noteTodos,
        // noteEdit,
    },
    created() { },
    data() {
        return {
            isHighLight: false,
            isClrClicked: false,
            // isPinned: false,
        }
    },
    methods: {
        removeNote(id) {
            console.log(id);
            this.$emit('removeNote', id);
        },
        duplicate(id) {
            this.$emit('duplicate', id);
        },
        highLightNote() {
            this.isHighLight = !this.isHighLight;
            console.log(this.isHighLight);
        },
        changeClr() {
            this.isClrClicked = !this.isClrClicked;
        },
        changePin(id) {
            // this.isPinned = !this.isPinned;
            console.log(id);
            console.log(this.isPinned);

            eventBus.emit('pinned', id)
        },
        setGrey(id) {
            this.note.style.backgroundColor = '#e8eaed';
            eventBus.emit('changeClr', id);
        },
        setBrown(id) {
            this.note.style.backgroundColor = '#e6c9a8';
            eventBus.emit('changeClr', id);
        },
        setPink(id) {
            this.note.style.backgroundColor = '#fdcfe8';
            eventBus.emit('changeClr', id);
        },
        setPurple(id) {
            this.note.style.backgroundColor = '#d7aefb';
            eventBus.emit('changeClr', id);
        },
        setBlue(id) {
            this.note.style.backgroundColor = '#aecbfa';
            eventBus.emit('changeClr', id);
        },
        setLightBlue(id) {
            this.note.style.backgroundColor = '#cbf0f8';
            eventBus.emit('changeClr', id);
        },
        setTurquoise(id) {
            this.note.style.backgroundColor = '#a7ffeb';
            eventBus.emit('changeClr', id);
        },
        setGreen(id) {
            this.note.style.backgroundColor = '#ccff90';
            eventBus.emit('changeClr', id);
        },
        setYellow(id) {
            this.note.style.backgroundColor = '#fff475';
            eventBus.emit('changeClr', id);
        },
        setOrange(id) {
            this.note.style.backgroundColor = '#fbbc04';
            eventBus.emit('changeClr', id);
        },
        setRed(id) {
            this.note.style.backgroundColor = '#f28b82';
            eventBus.emit('changeClr', id);
        },
    },
    computed: {
        boldNote() {
            return { boldNote: this.isHighLight, };
        },
        fillColor() {
            return this.note.style.backgroundColor;
        },
        markBtn() {
            return { 'mark-highlight': this.isHighLight };
        }
    },

}