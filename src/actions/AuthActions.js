import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return () => {
    // dispatch({ type: LOGIN_USER });

    // firebase.auth().signInWithEmailAndPassword(email, password)
    console.log("1");
    axios.get('http://10.0.2.2:4000/users')
      .then(resp => {
        data = resp.data;
        data.forEach(e => {
          console.log(`${e.firstName}, ${e.lastName}, ${e.email}`);
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
