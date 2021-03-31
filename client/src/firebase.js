import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyDmiZi1UsZEqoD6OvAh6wjq5s4ODTV8Ovw',
    authDomain: 'sportbets-bg.firebaseapp.com',
    projectId: 'sportbets-bg',
    storageBucket: 'sportbets-bg.appspot.com',
    messagingSenderId: '911632171631',
    appId: '1:911632171631:web:7a7aa1cbae9089676f039a'
})

export const auth = app.auth()
export default app