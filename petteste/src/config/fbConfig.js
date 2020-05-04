import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

  
    var firebaseConfig = {
        apiKey: "AIzaSyCBczVGMzq0t1PO59Lia9yJ5M4UPdoKtNQ",
        authDomain: "teste-projetopet.firebaseapp.com",
        databaseURL: "https://teste-projetopet.firebaseio.com",
        projectId: "teste-projetopet",
        storageBucket: "teste-projetopet.appspot.com",
        messagingSenderId: "440919120991",
        appId: "1:440919120991:web:8e98b8dfd67d970c618fea",
        measurementId: "G-X6ZT4KLP3R"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
     // firebase.analytics();
      firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;