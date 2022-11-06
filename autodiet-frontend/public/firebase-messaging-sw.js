// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBzgBmbgEXgDQ4LOBusGE13V_Ra43ZlFUQ",
    authDomain: "autodiet-14730.firebaseapp.com",
    projectId: "autodiet-14730",
    storageBucket: "autodiet-14730.appspot.com",
    messagingSenderId: "368721624789",
    appId: "1:368721624789:web:a1e2a728c625777780ac5c",
    measurementId: "G-0L87JH23XR"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});



