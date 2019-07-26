import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeeSEjPQhYeLh3gw4CB1jfgblMCP_Ro1Q",
  authDomain: "hacktiv8-244310.firebaseapp.com",
  databaseURL: "https://hacktiv8-244310.firebaseio.com",
  projectId: "hacktiv8-244310",
  storageBucket: "hacktiv8-244310.appspot.com",
  messagingSenderId: "897994221475",
  appId: "1:897994221475:web:f533650695f71ac6"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()

export default db
