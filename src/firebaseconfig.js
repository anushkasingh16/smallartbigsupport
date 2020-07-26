import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCdSfH6yK2jD6nbaLu9iwaAp7LrFPXiFRg",
    authDomain: "hobbyhacks-74058.firebaseapp.com",
    databaseURL: "https://hobbyhacks-74058.firebaseio.com",
    projectId: "hobbyhacks-74058",
    storageBucket: "hobbyhacks-74058.appspot.com",
    messagingSenderId: "959844982164",
    appId: "1:959844982164:web:f50043476e1b7ece0a0381"
  };
  var firebaseConfig = firebase.initializeApp(config);
  export default firebaseConfig;