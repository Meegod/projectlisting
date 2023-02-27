import { createUserWithEmailAndPassword,  signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";



export const signIn = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
 };

export const signUp = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
 };


//  export const getRecordQueryAll = async (dbName) => {
//    return await getDocs(collection(db, dbName));
// }

// const gomermLogOut = (authDispatch:(id:any)=>void) => {
//    return signOut(auth).then(() =>{
//       authDispatch({ type: 'LOGOUT' })
//    }).catch((error)=> console.log(error));
// }


// const gomermSignUp = (email: string, password: string) => {
//    return createUserWithEmailAndPassword(auth, email, password)
// }
// export { login };


// https://firebase.google.com/docs/auth/web/manage-users