const express = require("express");

const app = express();
const serviceAccount = require("./utils/serviceAccountKey.json");
const admin = require("firebase-admin");
const firebase = require("firebase").default;
const cors = require("cors");

if (!firebase.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  firebase.initializeApp({
    apiKey: "AIzaSyC5V2PGCGXynULtkeRTMMcxs13wxPCd2HE",
    authDomain: "pemilu-f561a.firebaseapp.com",
    projectId: "pemilu-f561a",
    storageBucket: "pemilu-f561a.appspot.com",
    messagingSenderId: "1006768768666",
    appId: "1:1006768768666:web:2b0c8c2195a21c7a994123",
    measurementId: "G-VJK3F6DLE7"
  });
} else {
  firebase.app();
}
app.use(express.json());
app.use(cors());
app.get("/", async (req, res) => {
  res.send("Go away Awoo! don't try to hack the server!");
});

const dptRouter = require("./routes/dpt");
const voteRouter = require("./routes/vote");
const authRouter = require("./routes/auth");

app.use("/vote", voteRouter);
app.use("/dpt", dptRouter);
app.use("/auth", authRouter);

module.exports = app;
