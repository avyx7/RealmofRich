const functions = require("firebase-functions");
const puppeteer = require('puppeteer');
const admin = require('firebase-admin');
admin.initializeApp();

const client = require('whatsapp-web.js');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(async(request, response) => {



    await client.on('qr', (qr) => {
        qrcode.generate(qr, {small: true});
        response.send("Hello from Kaminee!");
    });

    

});

