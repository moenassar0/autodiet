import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export const firebase_init = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Cloud Messaging and get a reference to the service
  const messaging = getMessaging(app);
  function requestPermission(){
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if(permission === 'granted'){
        console.log('Notification permission granted.');
        initToken();
      }
      else
        console.log("no permission");
    }
  )}

  function initToken(){
    getToken(messaging, {vapidKey: process.env.REACT_APP_VAPID_KEY})
    .then((currentToken) => {
        if(currentToken){
            console.log("curr token", currentToken);
            localStorage.setItem("firebasetoken", currentToken);
        }else{
            console.log("no token");
        }
    })
  }

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    
  });

  requestPermission();
}



