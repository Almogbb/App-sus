import { eventBus } from '../../../cmps/services/eventBus-service.js';
import noteImg from './note-img.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteVid from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['note'],
    template: `
        
        <div class="note" :class="boldNote" :style="{backgroundColor:fillColor}">
            <component :is="note.type" :note="note" ></component>
            <div class="btn-group show-btn" >
                <a 
                    class="note-btn top-btn remove" 
                    @click="removeNote(note.id)">X
                </a>
                <a title="mark note" class="note-btn bottom-btn mark" :class="markBtn" 
                    @click="highLightNote"><img src="icon/check.png">
                </a>
                <a class="note-btn bottom-btn pos" @click=changeClr>
                    <img src="icon/color-palette.png"></a>
                <a class="note-btn bottom-btn" @click="duplicate(note.id)">
                    <img src="icon/duplicate.png"></a>
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
                <div @click="setDefault(note.id)" class="round default"></div>
            </div>
        </div>
    `,
    components: {
        noteImg,
        noteTxt,
        noteVid,
        noteTodos,

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
            this.$emit('removeNote', id);
        },
        duplicate(id) {
            this.$emit('duplicate', id);
        },
        highLightNote() {
            this.isHighLight = !this.isHighLight;
        },
        changeClr() {
            this.isClrClicked = !this.isClrClicked;
        },
        changePin(id) {
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
        setDefault(id) {
            this.note.style.backgroundColor = '#ffffff';
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
        },
    },

}