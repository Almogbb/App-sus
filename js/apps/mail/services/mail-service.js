import { utilService } from '../../../cmps/services/util-service.js';
import { storageService } from '../../../cmps/services/async-storage-service.js';

const USERS_KEY = 'mailUsersDB';


export const mailService = {
    query,
    get,
}

createUsers();

function query() {
    return storageService.query(USERS_KEY);
}

function get(userId) {
    return storageService.get(USERS_KEY, userId)
}

function createUsers() {
    let users = utilService.loadFromStorage(USERS_KEY);
    if (!users || !users.length) {
        users = [{
            id: utilService.makeId(),
            name: 'Yaron',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
        },
        {
            id: utilService.makeId(),
            name: 'Adam',
            subject: 'Best product EVER',
            body: 'I heard you are interested in our product',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
        },
        {
            id: utilService.makeId(),
            name: 'Tamir',
            subject: 'Microsoft HR',
            body: 'About your job application',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        }
        ]
        utilService.saveToStorage(USERS_KEY, users)
    }
    return users
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}