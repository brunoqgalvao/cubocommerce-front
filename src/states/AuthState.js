import React, { useState, useContext, useEffect } from "react";
import firebase from '../services/firebaseUtils';
import { goToHome, goToRegister, goToCheckout } from '../services/dynamicRouting';
import { useAlert } from './AlertState';


const AuthState = props => {

  const alert = useAlert();

  // integrate login, register and logout with firebase
  // build firebase listener for changes on useffect
  // if not firebase, should hold a token in localStorage and check for changes somehow

  const initialState = {
    user: null,
    isAuth:false,
    credential:null,
    authLoading:true,
    authLevel:0,
    }

  const [state, setState] = useState(initialState);

  async function login(email,password) {
    try {
      const res = await firebase.login(email, password);
      updateUser(res.user)
      goToCheckout();
    } catch (err) {
      alert.show(err.message);
    }
  }

  async function register(name,email,password,phone) {
    try {
      //The register in the Firebase class is running with useState data.
      const user = await firebase.register(name, email, password);
      await firebase.addPhone(phone);
      console.log(user, "registered");
      goToCheckout();
    } catch (err) {
      alert.show(err.message);
    }
  }
  async function uploadAndSaveProfilePicture(blob) {
    try{
      const url = await firebase.uploadProfilePicture(blob);
      const user = await firebase.updatePhotoUrl(url);
      return user;
    } catch (err) {
      alert.show(err.message);
    }
  }

  async function registerWithPicture(name,email,password,blob) {
    try{
      await register(name,email,password);
    } catch(err){
      return 
    }
    await uploadAndSaveProfilePicture(blob);
  }

  async function logout( ) {
    try {
      //The register in the Firebase class is running with useState data.
      await firebase.logout();
      setState({...initialState, authLoading:false});
    } catch (err) {
      alert.show(err.message);
    }
  }

  const updateUser = (firebaseUser) => {
    if(firebaseUser == null) {
      setState({...initialState, authLoading:false});
    } else {
      const user = {
        email: firebaseUser.email,
        name: firebaseUser.displayName,
        token: firebaseUser,
        id: firebaseUser.uid,
        photoURL: firebaseUser.photoURL,
        auth:1,
        firstName :() => firstName(firebaseUser.displayName)
      }
      setState({...state,user,isAuth:true, authLoading:false});
      return user
    }
  }
  const firstName = (name) => {
    if(name){
      const firstName = name.substr(0,name.indexOf(' '));
      if(firstName.length !== 0){
        return firstName;
    } else {
      return name;
    }
    } else {
      return ""
    }
  }

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth.onAuthStateChanged(user => 
      user? updateUser(user):updateUser(null)
    );
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return (
    <authContext.Provider
      value={{
        state,
        login,
        logout,
        register,
        registerWithPicture
        }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;


const authContext = React.createContext();
export const useAuth = () => {
  return useContext(authContext);;
}

export const useSession = () => {
  const { state } = useContext(authContext)
  return state;
}
