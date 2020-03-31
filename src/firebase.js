import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyD0-Wa6IVfjh_e3mybkDctjsBEAn4VebfU',
  authDomain: 'todoist-clone-c6e97.firebaseapp.com',
  databaseURL: 'https://todoist-clone-c6e97.firebaseio.com',
  projectId: 'todoist-clone-c6e97',
  storageBucket: 'todoist-clone-c6e97.appspot.com',
  messagingSenderId: '207594782555',
  appId: '1:207594782555:web:411568b4ec92f856faa47e'
})

export { firebaseConfig as firebase }
