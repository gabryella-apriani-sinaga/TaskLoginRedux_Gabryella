// actions.js
import { type } from '@testing-library/user-event/dist/type';
import { DASHBOARD, DECREMENT, INCREMENT, LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const logout = () => ({
  type: LOGOUT,
});

export const dashboard = (deskripsi) => ({
  type:DASHBOARD,
  payload:deskripsi,
});

export const increment = () => ({
  type:DECREMENT,
});

export const decrement = () => ({
  type:INCREMENT,
})
