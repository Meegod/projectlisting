import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";



const gomermSignIn = (email,password) => {
   return signInWithEmailAndPassword(auth, email, password);
}


const gomermAuthState = async (authState) =>{
   return await onAuthStateChanged(auth, (userDetail) => {
      if(userDetail)authState(userDetail);
      else authDispatch({type: 'LOGOUT'});
   });
}


const gomermLogOut = (authDispatch:(id:any)=>void) => {
   return signOut(auth).then(() =>{
      authDispatch({ type: 'LOGOUT' })
   }).catch((error)=> console.log(error));
}


const gomermSignUp = (email: string, password: string) => {
   return createUserWithEmailAndPassword(auth, email, password)
}
export { gomermSignIn, gomermSignUp, gomermAuthState, gomermLogOut };


// https://firebase.google.com/docs/auth/web/manage-users