// run this script to set all user with user id from ./adminuid.json to admin
const admin = require("firebase-admin");
const firebase = require("firebase");

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
  // INI BUAT PERCOBAAN AJA
  // apiKey: "AIzaSyA5eRtJcUX0VxOmlJzXjr3H_y8BSiZyM60",
  // authDomain: "pemilu-c3c44.firebaseapp.com",
  // projectId: "pemilu-c3c44",
  // storageBucket: "pemilu-c3c44.appspot.com",
  // messagingSenderId: "551940857191",
  // appId: "1:551940857191:web:f8d4bb242a684ce547a3c2",
  // measurementId: "G-0T0MY4TH8T"
});

module.exports = admin;
