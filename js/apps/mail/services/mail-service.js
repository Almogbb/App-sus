import { utilService } from '../../../cmps/services/util-service.js';
import { storageService } from '../../../cmps/services/async-storage-service.js';

const USERS_KEY = 'mailUsersDB';


export const mailService = {
    query,
    get,
    save,
    addMail,
}

createUsers();

function query() {
    return storageService.query(USERS_KEY);
}

function get(userId) {
    return storageService.get(USERS_KEY, userId)
}

function save(mail) {
    if (mail.id) return storageService.put(USERS_KEY, mail);
    else return storageService.post(USERS_KEY, mail);
}

function createUsers() {
    let users = utilService.loadFromStorage(USERS_KEY);
    if (!users || !users.length) {
        users = [{
                id: utilService.makeId(),
                name: 'Yaron',
                type: 'Send',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
            },
            {
                id: utilService.makeId(),
                name: 'Adam',
                type: 'Inbox',
                subject: 'Best product EVER',
                body: 'I heard you are interested in our product',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
            },
            {
                id: utilService.makeId(),
                name: 'Tamir',
                type: 'Inbox',
                subject: 'Microsoft HR',
                body: 'About your job application',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            }
        ]
        utilService.saveToStorage(USERS_KEY, users)
    }
    console.log(users);
    return users
}

function addMail(newMail) {
    const mail = _createMail()
    mail.info = newMail;

    return storageService.post(USERS_KEY, newMail)
}

function getEmptyUser() {
    return {
        name: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    }
}

function _createMail() {
    const mail = getEmptyUser()
    mail.id = utilService.makeId()
    return mail;
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}