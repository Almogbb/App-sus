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
    removeNote

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

function save(car) {
    if (car.id) return storageService.put(NOTES_KEY, car);
    else return storageService.post(NOTES_KEY, car);
}

function addNote(inputTxt) {

    const note = _createNote();
    note.info.txt = inputTxt;
    return storageService.post(NOTES_KEY, note)

}

function removeNote(id, notes) {
    // console.log(id);
    // console.log(notes);
    const noteIdx = notes.findIndex(note => note.id === id);
    console.log(noteIdx);
    notes.splice(noteIdx, 1);

}


function createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [];
        notes.push(
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                info: {
                    url: "http://some-img/me",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            })
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function getEmptyNote(isPinned = false) {
    return {
        id: '',
        type: "note-txt",
        isPinned,
        info: {
            txt: ''
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