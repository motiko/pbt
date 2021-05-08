import firebase from "firebase/app";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyC_BEjloxmuFrJuJMuDY2wiSNC2SJn_qho",
  authDomain: "pzl-btl.firebaseapp.com",
  databaseURL: "https://pzl-btl-default-rtdb.firebaseio.com",
  projectId: "pzl-btl",
  storageBucket: "pzl-btl.appspot.com",
  messagingSenderId: "592026568954",
  appId: "1:592026568954:web:87a8e81b5713fdcabce143",
};

export function getFirebase() {
  if (!firebase.apps.length) {
    return firebase.initializeApp(firebaseConfig);
  } else {
    return firebase.app(); // if already initialized, use that one
  }
}
