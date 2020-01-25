import { firestore } from '../../config/fbconfig'

export const createProject = project => {
  return (dispatch, getState, { getFireBase, getFireStore }) => {
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Pepe",
        authorLastName: "Sonico",
        authorId: 123456,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      }).catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err })
      })
  };
};
