
// import firebase from "firebase/app";
// import "firebase/firestore";
// const firebase = require('firebase');
// require('firebase/firestore');

// import firebase from "firebase/app";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyC0xnpfJlRsSbOQkgJz135T1N4QAUvZbw0",
  authDomain: "test-form-faf03.firebaseapp.com",
  projectId: "test-form-faf03",
  storageBucket: "test-form-faf03.appspot.com",
  messagingSenderId: "1088034814389",
  appId: "1:1088034814389:web:97360ea7211604926701fc",
  measurementId: "G-DB9JN4N4Z7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('Firebase inicializado correctamente');


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();



document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let errorNombre = document.getElementById('errornombre');
  let email = document.getElementById("email").value;
  let errorEmail = document.getElementById('erroremail');
  let contrasena = document.getElementById("contrasena");
  let errorContrasena = document.getElementById('errorcontrasena');
  let contrasenaPattern = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
 if (name == '') {
    errorNombre.textContent="Ingresá el nombre";
    errorNombre.classList.add('error');
  }else{
    errorNombre.textContent="";
    errorNombre.classList.remove('error');
  }
  
  if (name == '') {
    errorEmail.textContent="Ingresá el email";
    errorEmail.classList.add('error');
  }else{
    errorEmail.textContent="";
    errorEmail.classList.remove('error');
  }
  
  if (contrasenaPattern.test(contrasena.value)) {
    errorContrasena.textContent="Ingresá la contrasena";
    errorContrasena.classList.add('error');
    console.log('error')
    }else{
     contrasena.value = "";
    errorContrasena.textContent = "";
    errorContrasena.classList.remove('error');
    console.log('pasa');
  }
  
  if(!errorNombre.textContent && !errorEmail.textContent && !errorContrasena.textContent){
    console.log('se ha enviado con exito');

    db.collection("users").add({
    nombre: "hola",
    email: "hola@email",
    password: "pass"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

  }
  
});
