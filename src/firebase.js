import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAjpH_-LvLp5BsfXkqdmQCMSSJQgyT4TWg",
    authDomain: "contact-form-dbf10.firebaseapp.com",
    databaseURL: "https://contact-form-dbf10-default-rtdb.firebaseio.com",
    projectId: "contact-form-dbf10",
    storageBucket: "contact-form-dbf10.appspot.com",
    messagingSenderId: "605797391972",
    appId: "1:605797391972:web:fd861584dae14dd5094971"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();