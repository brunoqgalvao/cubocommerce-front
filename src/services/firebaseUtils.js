import app from "firebase/app"; //The app variable represents the firebase application.
//We have to import auth and firestore to use the features.
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/firebase-storage";

//For firebase config setting, you should use your own application's information.
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "cubocommerce-b075b.firebaseapp.com",
  databaseURL: "https://cubocommerce-b075b.firebaseio.com",
  projectId: "cubocommerce-b075b",
  storageBucket: "cubocommerce-b075b.appspot.com",
  messagingSenderId: "638018439986",
  appId: "1:638018439986:web:eac1e85d522bc45ef2652b"
};

class Firebase {
 constructor() {
    app.initializeApp(config); //Let config information initialize firebase
    //With this.auth and this.db variables we can access auth and firestore
    this.auth = app.auth();
    this.db =  app.firestore();
    this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL)
    this.storage = app.storage();
  }
  currentUser() {
    const user = this.auth;
    return user
  }
  login(email, pass) {
    //firebase login function
    return this.auth.signInWithEmailAndPassword(email, pass);
  }
  logout() {
    //firebase logout function
    return this.auth.signOut();
  }
  async register(name, email, pass, photoUrl = "") {
    //firebase register function
    await this.auth.createUserWithEmailAndPassword(email, pass);
    //We've updated the username of the register result.
    return this.auth.currentUser.updateProfile({
      displayName: name,
      photoURL:photoUrl,
    });
  }

  async uploadProfilePicture(file){
    const uploadImage = this.storage.ref().child('avatar.'+this.auth.currentUser.uid);
    return await uploadImage.put(file).then((snapshot)=>{
     return snapshot.ref.getDownloadURL();
    })
  }

  async updatePhotoUrl(photoUrl){
    return await this.auth.currentUser.updateProfile({
      photoURL:photoUrl,
    });
  }

  addPhone(phone){
    //user presence control
    if(!this.auth.currentUser){
        return false;
    }
    //Adding documents to the collection of pckurdu
    return this.db.doc(`user/${this.auth.currentUser.uid}`).set({
        phone:phone
    })
  }
  addAddress(address){
    //user presence control
    if(!this.auth.currentUser){
      return false;
  }     //Adding documents to the collection of pckurdu
  return this.db.doc(`user/${this.auth.currentUser.uid}`).set({
      address:address
  })
  }
}

export default new Firebase();
