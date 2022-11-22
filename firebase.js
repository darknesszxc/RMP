// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import { useState } from "react";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyD43Knkk22EN8M989P3E1ekt5PkFGxFGPU",
  authDomain: "laba-33b63.firebaseapp.com",
  databaseURL: "https://laba-33b63-default-rtdb.firebaseio.com",
  projectId: "laba-33b63",
  storageBucket: "laba-33b63.appspot.com",
  messagingSenderId: "520601180134",
  appId: "1:520601180134:web:9579db670306008f176827"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()


export default firebase;
export { auth };

var database=firebase.database();

 export function readdb(){
const[value,setValue]=useState(null)
  var starCountRef = database.database().ref('name');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data!=value){
      setValue(data)

    }
    

  });
return value
 }