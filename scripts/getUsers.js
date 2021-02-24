const admin = require("firebase-admin");
const firebase = require("firebase");
const fs = require("fs");

const serviceAccount = require("../api/utils/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
firebase.default.initializeApp({
  apiKey: "AIzaSyC5V2PGCGXynULtkeRTMMcxs13wxPCd2HE",
  authDomain: "pemilu-f561a.firebaseapp.com",
  projectId: "pemilu-f561a",
  storageBucket: "pemilu-f561a.appspot.com",
  messagingSenderId: "1006768768666",
  appId: "1:1006768768666:web:2b0c8c2195a21c7a994123",
  measurementId: "G-VJK3F6DLE7"
});

async function getAndSaveUsers() {
  console.log("test");
  const userResultList = await admin.auth().listUsers(1000);
  console.log(userResultList);
  const users = userResultList.users.map(user => {
    return user.toJSON();
  });
  fs.writeFileSync("users.json", JSON.stringify(users));
}
getAndSaveUsers();
