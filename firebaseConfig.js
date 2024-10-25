import { Firebase_ApiKey, Firebase_AppId } from '@env';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: Firebase_ApiKey,
  authDomain: "bill-me-000-pe.firebaseapp.com",
  projectId: "bill-me-000-pe",
  storageBucket: "bill-me-000-pe.appspot.com",
  messagingSenderId: "932982664183",
  appId: Firebase_AppId,
  measurementId: "G-99BB1492P8"
};


let appInitialized = false;
let authInitialized = false;


export const FIREBASE_APP = (() => {
  if (!appInitialized) {
    appInitialized = initializeApp(firebaseConfig);
  }
  return appInitialized;
})();

export const FIREBASE_AUTH = (() => {
  if (!authInitialized) {
    if (Platform.OS === "web") {
      authInitialized = initializeAuth(FIREBASE_APP, {
        persistence: browserLocalPersistence,
      });
    } else {
      authInitialized = initializeAuth(FIREBASE_APP, {
        persistence: getReactNativePersistence(AsyncStorage),
      });
    }
  }
  return authInitialized;
})();

export const FIREBASE_STORE = getFirestore(FIREBASE_APP);
