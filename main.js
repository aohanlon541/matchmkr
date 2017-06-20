 // Initialize Firebase
var config = {
    apiKey: "AIzaSyA9Buizd5WuhMphw4sxQjUnVNbP87eauQ8",
    authDomain: "match-maker-8ab3a.firebaseapp.com",
    databaseURL: "https://match-maker-8ab3a.firebaseio.com",
    projectId: "match-maker-8ab3a",
    storageBucket: "",
    messagingSenderId: "178196034489"
  };
  firebase.initializeApp(config);

var email;
var password;  

function signup() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
        email = $("#signupEmail").val();
        password = $("#signupPassword").val();

    });
}

$("#signUpBtn").on("click", function() {
    signup();
});

$("#loginBtn").on("click", function() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
});
