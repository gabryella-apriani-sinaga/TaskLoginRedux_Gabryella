// reducers.js
import { LOGIN_SUCCESS, LOGOUT, DASHBOARD, INCREMENT, DECREMENT } from './actionTypes';

const initialState = {
  isLoggedIn: false,
  userData: {},
  deskripsi:'',
  counter:0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: {},
        counter:0
      };
    case DASHBOARD:
      return {
        ...state,
        userData:{},
        deskripsi:action.payload
      };
      case INCREMENT:
        return {
          ...state,
          counter: state.counter + 1
        };
      case DECREMENT:
        return {
          ...state,
          counter: state.counter - 1
        };
    default:
      return state;
  }
};

export default rootReducer;
