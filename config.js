import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHojhbqh7tP1JDAhCXkfxaaZ1St1PGb2E",
    authDomain: "a-survey-to-bring-the-change.firebaseapp.com",
    databaseURL: "https://a-survey-to-bring-the-change.firebaseio.com",
    projectId: "a-survey-to-bring-the-change",
    storageBucket: "a-survey-to-bring-the-change.appspot.com",
    messagingSenderId: "645194090326",
    appId: "1:645194090326:web:3c5530bf787d2bad92b8f7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();