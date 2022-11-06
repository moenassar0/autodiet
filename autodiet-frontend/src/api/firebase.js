import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBzgBmbgEXgDQ4LOBusGE13V_Ra43ZlFUQ",
  authDomain: "autodiet-14730.firebaseapp.com",
  databaseURL: "https://autodiet-14730-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "autodiet-14730",
  storageBucket: "autodiet-14730.appspot.com",
  messagingSenderId: "368721624789",
  appId: "1:368721624789:web:a1e2a728c625777780ac5c",
  measurementId: "G-0L87JH23XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);



    /*
    const call = async () => {
            var key = 'AAAAVdmFftU:APA91bHzbdpUcQ1Huf3qMB4iaVrpXeSUxRDblVA0i_uLIZOknNaCY14L_IlI23nDCUHoH--V5hJDyDLEK9so5wCZZy7Mylx3dvGHjmRZ-g4HyE2gRva3iLQvR8yIxeBkDswHwwUe_FZ3';
            var to = 'APA91bHhcBXec0MpvvjcOlkqMetz9DfEfgORVZA0jhTVXoenVHAQK4Pa_kSSigls520m5zCy9VCZFg0dAqxgTpbWPzhN_y5dCljYugotqO7EbcwrX55lVnMtUN3uqpAL58gBvGF_L3Ai';
            var notification = {
              'title': 'Portugal vs. Denmark',
              'body': '5 to 1',
              'icon': 'firebase-logo.png',
              'click_action': 'http://localhost:3000'
            };
            
            await fetch('https://fcm.googleapis.com/fcm/send', {
              'method': 'POST',
              'headers': {
                'Authorization': 'key=' + key,
                'Content-Type': 'application/json'
              },
              'body': JSON.stringify({
                'notification': notification,
                'to': to
              })
            }).then(function(response) {
              console.log(response);
            }).catch(function(error) {
              console.error(error);
            })
        }
    */