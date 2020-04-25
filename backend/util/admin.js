const admin = require('firebase-admin');
//const serviceAccount = require("./socialapp-98dd7-c0fead2c767e.json");
admin.initializeApp(
   // {
   //     credential: admin.credential.cert(serviceAccount),
   //     databaseURL: "https://socialapp-98dd7.firebaseio.com"
   // adding comment
  //
//}
);

const db = admin.firestore();

module.exports = { admin, db };