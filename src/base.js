import Rebase from 're-base'
import firebase from 'firebase'

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDYxZ6TaQOrYYWGKw56CcwHC4E_K2qrkpk',
  authDomain: 'catch-of-the-day-luis-431d5.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-luis-431d5.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// this is a named export
export { firebaseApp }

// This is a default export
export default base
