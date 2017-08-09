import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import reducers from './reducers'
import LogInForm from './components/LogInForm.js'

class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAPPkutpsgQvdQSE2b2th5YBIHW2J7nqDA',
      authDomain: 'manager-a4dcc.firebaseapp.com',
      databaseURL: 'https://manager-a4dcc.firebaseio.com',
      projectId: 'manager-a4dcc',
      storageBucket: 'manager-a4dcc.appspot.com',
      messagingSenderId: '954338801856',
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LogInForm />
      </Provider>
    )
  }
}

export default App
