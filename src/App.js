import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux' // applyMiddleware is needed to wire up redux-thunk
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import LogInForm from './components/LogInForm'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <LogInForm />
      </Provider>
    )
  }
}

export default App
