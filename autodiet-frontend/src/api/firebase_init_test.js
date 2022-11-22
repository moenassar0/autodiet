import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

export const firebase_init = () => {
  //const {setCurrentTheme, themeType} = useTheme();
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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
getToken(messaging, {vapidKey: "BM9L9BDzDJoRMVhgsK9T8Od8PTcj3CmvytApjd6pTOPBeFRykYjfylOhoYTKFPzsQ406Nc4dsEfYvwAS2VZfZU0"})
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

/*const getToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'GENERATED_MESSAGING_KEY'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}*/

/*export const onMessageListener = () =>
new Promise((resolve) => {
  onMessage(messaging, (payload) => {
    resolve(payload);
  });
});*/
}



