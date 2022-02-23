import { collection, collectionGroup, getDoc, getDocs, getFirestore, query } from "firebase/firestore";

export const LOAD_USERS = "LOAD_USERS";

export const loadUsers = () => async (dispatch) => {
    const db = getFirestore();
    let users = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(doc => users.push(doc.data()));
    dispatch({type: LOAD_USERS, payload: users});
};


    
   


