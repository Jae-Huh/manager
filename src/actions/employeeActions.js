import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
} from './types'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth() // This is how to access current user's uid from firebase to save employees under their uid.

  return (dispatch) => { // Using redux thunk for async action.
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE })
        Actions.employeeList({ type: 'reset' })
      }) // Returns to employeeList view once create employee request is sent. type: 'reset' resets the view (without it, navbar will show arrow to go back to the create employee view)
  }
}

export const employeesFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => { // Async action using redux thunk
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth()

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        console.log('saved!')
      })
  }
}
