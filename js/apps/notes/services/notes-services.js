import { storageService } from '../../../cmps/services/async-storage-service.js';
import { utilService } from '../../../cmps/services/util-service.js';


const NOTES_KEY = 'notesDB'

createNotes()

export const notesService = {
    query,
    remove,
    get,
    save,
    addNote,
    getEmptyNote,
    removeNote,
    duplicateNote,
    saveEdit,
    saveClr,
    markTodo,
    // getNote

}

function query() {
    return storageService.query(NOTES_KEY);
}

function remove(notesId) {
    return storageService.remove(NOTES_KEY, notesId);
}

function get(notesId) {
    return storageService.get(NOTES_KEY, notesId)
}

// function getNote(notesId) {
//     return storageService.get(NOTES_KEY, notesId)
//         .then(note => {
//             note.isPinned = !note.isPinned;
//             return storageService.put(NOTES_KEY, note)
//         })
// }

function save(noteId) {
    if (noteId) return storageService.put(NOTES_KEY, noteId);
    else return storageService.post(NOTES_KEY, noteId);
}

function saveClr(id, notes) {
    const note = notes.find(note => note.id === id);
    storageService.put(NOTES_KEY, note)
}

function markTodo(todoId, noteId) {
    return storageService.get(NOTES_KEY, noteId)
        .then(note => {
            const todo = note.info.todos.find(todo => todo.id === todoId);
            // console.log(todo);
            // if(todo.doneAt)
            todo.doneAt = todo.doneAt ? null : Date.now();
            // console.log(todo.doneAt);
            console.log(todo);
            return storageService.put(NOTES_KEY, note);
        })
}

function saveEdit(noteId, txt, notes) {
    console.log(noteId, txt);
    const note = notes.find(note => note.id === noteId)
    note.info.txt = txt;
    return storageService.put(NOTES_KEY, note)
}

function addNote(inputTxt, type) {
    const note = _createNote();
    note.type = type;
    if (note.type === 'note-txt') note.info.txt = inputTxt;
    else if (note.type === 'note-img') note.info.url = inputTxt;
    else if (note.type === 'note-vid') note.info.url = inputTxt;
    else if (note.type === 'note-todos') {
        if (inputTxt.includes(',')) {
            var todos = [...inputTxt.split(',')]
            // var todos = [...inputTxt]
            console.log(todos);
            todos.map(task => {
                note.info.todos.push({
                    id: utilService.makeId(), txt: task, doneAt: ''
                })
            })
            return storageService.post(NOTES_KEY, note);
        }
    }
    return storageService.post(NOTES_KEY, note)
}

function removeNote(id, notes) {
    const noteIdx = notes.findIndex(note => note.id === id);
    notes.splice(noteIdx, 1);
    return utilService.saveToStorage(NOTES_KEY, notes);
}

function duplicateNote(id, notes) {
    const noteCopy = notes.find(note => note.id === id)
    notes.push(noteCopy);
    return utilService.saveToStorage(NOTES_KEY, notes)
}

function createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [];
        notes.push(
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "#ffffff"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "#ffffff"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "#1abc9c"
                }
            },
            // {
            //     id: utilService.makeId(),
            //     type: "note-vid",
            //     isPinned: false,
            //     info: {
            //         url: 'https://www.youtube.com/watch?v=gThS-KfIxOs&t=2599s',
            //         txt: "Best Video EVER!"
            //     },
            //     style: {
            //         backgroundColor: "#ffffff"
            //     }
            // },
            {
                id: utilService.makeId(),
                type: "note-vid",
                isPinned: false,
                info: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/96/Curiosity%27s_Seven_Minutes_of_Terror.ogv/Curiosity%27s_Seven_Minutes_of_Terror.ogv.480p.vp9.webm',
                    txt: 'Educational Video!'
                },
                style: {
                    backgroundColor: "#ffffff"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                isPinned: false,
                info: {
                    // url: "http://some-img/me",
                    url: 'img/download.jpg',
                    txt: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#ffffff"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-vid",
                isPinned: false,
                info: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/eb/Wood_cleaving_-_2016.webm/Wood_cleaving_-_2016.webm.480p.vp9.webm',
                    txt: 'This is how you cut tree'
                },
                style: {
                    backgroundColor: "#ffffff"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                isPinned: false,
                info: {
                    txt: "Get my stuff together",
                    todos: [
                        { id: utilService.makeId(), txt: "Driving liscence", doneAt: null },
                        { id: utilService.makeId(), txt: "Coding power", doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor: "#ffffff"
                }
            })
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function getEmptyNote(isPinned = false) {
    return {
        id: '',
        // type: "note-txt",
        type: '',
        isPinned,
        info: {
            txt: 'Enter Title',
            todos: []
        },
        style: {
            backgroundColor: "#ffffff"
        }
    };
}

function _createNote(isPinned = false) {
    const note = getEmptyNote(isPinned = false)
    note.id = utilService.makeId()
    return note;
}


// const notes = [
//     {
//         id:
//             "n101",
//         type: "note-txt",
//         isPinned: true,
//         info: {
//             txt: "Fullstack Me Baby!"
//         }
//     },
//     {
//         id: "n102",
//         type: "note-img",
//         info: {
//             url: "http://some-img/me",
//             title: "Bobi and Me"
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: "n103",
//         type: "note-todos",
//         info: {
//             label: "Get my stuff together",
//             todos: [
//                 { txt: "Driving liscence", doneAt: null },
//                 { txt: "Coding power", doneAt: 187111111 }
//             ]
//         }
//     }
// ];