import firebase from 'firebase'

 const signIn = (credentials) => {
  return (dispatch, getState) => {

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export default signIn
