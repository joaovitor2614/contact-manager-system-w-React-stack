import { firebase } from '@firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/database'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MSG_SENDER_ID
};



firebase.initializeApp(config);
const database= firebase.database();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, projectStorage, projectFirestore, timestamp, database as default }