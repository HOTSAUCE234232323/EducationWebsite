import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAgtTRkf1smT1GQ4g-CfZ43TSTZV15MAic",
    authDomain: "educationwebsite-baaf8.firebaseapp.com",
    projectId: "educationwebsite-baaf8",
    storageBucket: "educationwebsite-baaf8.appspot.com",
    messagingSenderId: "294364177449",
    appId: "1:294364177449:web:ce8f87e298c79797f62838",
    measurementId: "G-V07P4RDB10"
});
document.getElementById('signinbtn').onclick = function(){
  const auth = getAuth();
  var siemail = document.getElementById("siemail").value;
  var sipassword = document.getElementById("sipassword").value;
signInWithEmailAndPassword(auth, siemail, sipassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location("course.html");
  })
  .catch((error) => {
    const errorCode = error.code;
  });
}
document.getElementById('signupbtn').onclick = function(){
    var auth = getAuth(firebaseApp);
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  

}
document.getElementById("signoutbtn").onclick = function(){
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}