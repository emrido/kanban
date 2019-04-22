import firebase from 'firebase'
import 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyB5nbXui0vNoWFd4kPGAhblp5Zh6fVXhPY',
  authDomain: 'porto-kanban-firebase.firebaseapp.com',
  databaseURL: 'https://porto-kanban-firebase.firebaseio.com',
  projectId: 'porto-kanban-firebase',
  storageBucket: 'porto-kanban-firebase.appspot.com',
  messagingSenderId: '624085287794'
}

firebase.initializeApp(config)
const database = firebase.database()

export default database
