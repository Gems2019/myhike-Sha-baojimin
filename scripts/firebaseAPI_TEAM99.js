//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDHpc53-WpIUyjiX2KnJEGNUqVMABEzMek",
    authDomain: "comp1800-202410-demo-3e415.firebaseapp.com",
    projectId: "comp1800-202410-demo-3e415",
    storageBucket: "comp1800-202410-demo-3e415.appspot.com",
    messagingSenderId: "27842159385",
    appId: "1:27842159385:web:7b53ec966043e80a9cdb88"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
