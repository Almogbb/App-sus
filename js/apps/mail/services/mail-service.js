import { utilService } from '../../../cmps/services/util-service.js';
import { storageService } from '../../../cmps/services/async-storage-service.js';

const MAILS_KEY = 'mailUsersDB';


export const mailService = {
    query,
    get,
    save,
    addMail,
    remove,
    sendMailToArchive,
    removeArchive,
    starMail,
    updateStatusMail,
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

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId);
}

function createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    const date1 = new Date('February 25, 1995 23:15:30');
    const date2 = new Date('February 12, 1995 23:15:30');
    const date3 = new Date('April 25, 1995 23:15:30');
    const date4 = new Date('May 25, 1995 23:15:30');
    const date5 = new Date('June 25, 1995 23:15:30');
    const date6 = new Date('August 25, 1995 23:15:30');
    const date7 = new Date('September 25, 1995 23:15:30');
    const date = new Date(Date.now());
    if (!mails || !mails.length) {
        mails = [{
                id: utilService.makeId(),
                name: 'APIMASTER',
                type: 'Inbox',
                subject: 'GET YOUR FREE API TODAY!',
                body: 'Going from child, to childish, to childlike is only a matter of time.',
                isRead: false,
                date: date1.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
                sentAt: 1551133930594,
                to: 'momo@momo.com',
            },
            {
                id: utilService.makeId(),
                name: 'Adam',
                type: 'Inbox',
                subject: 'What is your favorite thing to eat or drink in winter?',
                body: 'I heard you are interested in our product',
                isRead: false,
                date: date2.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
                sentAt: 1551133930594,
                to: 'momo@momo.com',
            },
            {
                id: utilService.makeId(),
                name: 'Amit Hook',
                type: 'Inbox',
                subject: 'Microsoft HR',
                body: 'Not all people who wander are lost.',
                isRead: false,
                date: date3.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
            {
                id: utilService.makeId(),
                name: 'Zakariya Jaramillo',
                type: 'Inbox',
                subject: 'What is the hardest sport to excel at?',
                body: 'I only enjoy window shopping when the windows are transparent.',
                isRead: false,
                date: date4.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
            {
                id: utilService.makeId(),
                name: 'Iain Cisneros',
                type: 'Inbox',
                subject: 'What did you do on your last vacation?',
                body: 'He always wore his sunglasses at night.',
                isRead: false,
                date: date5.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
            {
                id: utilService.makeId(),
                name: 'Amit Hook',
                type: 'Inbox',
                subject: 'How much do you plan for the future',
                body: 'Improve your goldfishs physical fitness by getting him a bicycle.',
                isRead: false,
                date: date6.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
            {
                id: utilService.makeId(),
                name: 'Sheila Aguilar',
                type: 'Inbox',
                subject: 'How often do you check your phone',
                body: 'Poison ivy grew through the fence they said was impenetrable.',
                isRead: false,
                date: date7.toLocaleString('en-US', { month: 'short', day: 'numeric' }),
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            },
            {
                id: utilService.makeId(),
                name: 'Mylah Handley',
                type: 'Send',
                subject: 'Spotify',
                body: 'A song can make or ruin a person’s day if they let it get to them.',
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


function sendMailToArchive(mailId, mails) {
    const mailIdx = mails.find(mail => mail.id === mailId);
    mailIdx.type = 'Archive'
    return storageService.put(MAILS_KEY, mailIdx);
}

function starMail(mailId, mails) {
    const mailIdx = mails.find(mail => mail.id === mailId);
    mailIdx.type = 'Starred'
    return storageService.put(MAILS_KEY, mailIdx);
}

function updateStatusMail(mail) {
    mail.isRead = true
    utilService.saveToStorage(mail)
}

function removeArchive(mailId, mails) {
    const mailIdx = mails.findIndex(mail => mail.id === mailId);
    mails.splice(mailIdx, 1);
    return utilService.saveToStorage(MAILS_KEY, mails);
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