import { firebase } from '@firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MSG_SENDER_ID
};



firebase.initializeApp(config);
firebase.auth().languageCode = 'it'
const provider = new firebase.auth.GoogleAuthProvider()
const gitProvider = new firebase.auth.GithubAuthProvider()
const database = firebase.database();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, provider, gitProvider, projectStorage, projectFirestore, timestamp, database as default }