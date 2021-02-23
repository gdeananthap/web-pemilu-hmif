// run this script to set all user with user id from ./adminuid.json to admin
const dptDatas = require("./dpt.json");
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

const db = admin.firestore();
const dpt = db.collection("dpt");

const batch = db.batch();

// Set the value of 'NYC'
dptDatas.forEach(nim => {
  const dptRef = dpt.doc(nim.toString());
  batch.set(dptRef, {
    votefor: ""
  });
});
async function commitWrite() {
  await batch.commit();
  console.log("done!");
}

commitWrite();
