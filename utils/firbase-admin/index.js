// import { v4 as uuid } from "uuid";
import admin from "firebase-admin";
// import serviceAccount from "./pzl-btl-firebase-adminsdk-myu3e-3ff1051e6a.json";

export default function rtdb() {
  if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(
          JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
        ),
        databaseURL: "https://pzl-btl-default-rtdb.firebaseio.com",
      });
    } catch (error) {
      console.log("Firebase admin initialization error", error.stack);
    }
  }
  return admin.database();
}
