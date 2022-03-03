import { utilService } from '../../../cmps/services/util-service.js';
import { storageService } from '../../../cmps/services/async-storage-service.js';

const MAILS_KEY = 'mailUsersDB';


export const mailService = {
    query,
    get,
    save,
    addMail,
    sendMailToArchive,
}

createMails();

function query() {
    return storageService.query(MAILS_KEY);
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}

function save(mail) {
    if (mail.id) return storageService.put(MAILS_KEY, mail);
    else return storageService.post(MAILS_KEY, mail);
}

function createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    const date = new Date(Date.now());
    if (!mails || !mails.length) {
        mails = [{
                id: utilService.makeId(),
                name: 'Yaron',
                type: 'Inbox',
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
            },
            {
                id: utilService.makeId(),
                name: 'Send',
                type: 'Send',
                subject: 'Microsoft HR',
                body: 'About your job application',
                isRead: false,
                sentAt: 1551133930594,
                date: date.toLocaleString('en-US', { month: 'short', day: 'numeric' }),

                to: 'momo@momo.com'
            }
        ]
        utilService.saveToStorage(MAILS_KEY, mails)
    }
    console.log(mails);
    return mails
}

function addMail(newMail) {
    const mail = _createMail()
    mail.id = newMail;

    return storageService.post(MAILS_KEY, newMail)
}

// function sendMailToArchive(mailId, mails) {
//     const mailIdx = mails.findIndex(mail => mail.id === mailId);
//     return mails.map((mail) => {
//         if (mail === mailId) {
//             console.log(mail);
//         }
//     })

//     // return storageService.put(MAILS_KEY, mails);
// }

function sendMailToArchive(mailId, mails) {
    const mailIdx = mails.find(mail => mail.id === mailId);
    mails.splice(mailIdx, 1);
    mailIdx.type = 'Archive'
    mails.push(mailIdx);
    console.log(mails);
    return utilService.save(MAILS_KEY, mails);
}

function getEmptyUser() {
    const date = new Date(Date.now());

    return {
        name: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: 1551133930594,
        date: date.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
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