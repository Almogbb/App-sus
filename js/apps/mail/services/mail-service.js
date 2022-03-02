import { utilService } from '../../../cmps/services/util-service.js';
import { storageService } from '../../../cmps/services/async-storage-service.js';

const USERS_KEY = 'mailUsers'


export const mailService = {

}

createUsers();

function createUsers() {
    let users = utilService.loadFromStorage(USERS_KEY);
    if (!users || !users.length) {
        users = [];
        users.push({
            id: utilService.makeId(),
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
        }, {
            id: utilService.makeId(),
            subject: 'Best product EVER',
            body: 'I heard you are interested in our product',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
        }, {
            id: utilService.makeId(),
            subject: 'Microsoft HR',
            body: 'About your job application',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        })

    }
    console.log(users);
    return users
}


const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}