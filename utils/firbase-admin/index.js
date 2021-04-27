import admin from "firebase-admin";
import serviceAccount from "./pzl-btl-firebase-adminsdk-myu3e-3ff1051e6a.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://pzl-btl-default-rtdb.firebaseio.com",
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.database();
