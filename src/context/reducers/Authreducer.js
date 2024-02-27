export const initialAuthState = {
    isLoggedIn: false,
    user: null,
    authError: null,
    ustate: "initial state"
  };
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          ustate: action.payload
        };
      case "ADMIN_LOADED":
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload
        };
      case "AUTH_ERROR":
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          ustate:action.payload,
          authError: action.payload
        }
      default:
        return state;
    }
  };