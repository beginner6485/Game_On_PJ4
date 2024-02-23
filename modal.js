function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// le bouton Close doit permettre de fermer l'onglet inscription.
let signupBtn = document.querySelector(".close")

signupBtn.addEventListener("click",closeModale)

function closeModale(){
   let modale = document.querySelector(".bground")
   modale.style.display="none";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalFirst = document.getElementById("first");
const modalLast = document.getElementById("last");
const modalEmail = document.querySelector("#email");
const modalBirth = document.getElementById("birthdate");
const checkboxicon = document.getElementById ("checkbox-icon");
const Data = document.querySelectorAll(".formData");
const modalSubmit = document.querySelector (".btn-submit");
const inputControl = document.querySelectorAll(".textcontrol");
const message= document.querySelector(".message");
const message2= document.querySelector(".message2");
const message3= document.querySelector(".message3");
const message4= document.querySelector(".message4");
const message5= document.querySelector(".message5");
const quantity= document.getElementById ("quantity");
const boutonRadio= document.querySelector("radio"); 


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// de ce que je comprends cette ligne ouvre au click la fenêtre "je m'inscris"

// launch modal form (ferme la fenêtre)
function launchModal() {
  modalbg.style.display = "block"; 
}

// interaction rouge/blanc champs/conditions + keyup = lire l'action (taper)

function textCheck(inputControl) {
  console.log(inputControl)
if(inputControl.value.length < 2) { 
  inputControl.style.border= "solid red"; 
  message.style.display="block";
  message2.style.display="block";
  console.log("mauvais");
  return false;
}else{
  inputControl.style.border= "white"; 
  inputControl.style.background= "white";
  message.style.display="none";
  message2.style.display="none";
  console.log("supérieur à 2 ");
  return true;
 }
}


modalFirst.addEventListener("keyup",e => {
  textCheck(modalFirst);
});

modalLast.addEventListener("keyup", e => {
  textCheck(modalLast);
});


function emailTest (){
let emailRegex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
  console.log(emailRegex.test(modalEmail.value));
if (emailRegex.test(modalEmail.value)) {
  console.log("ok");
  message3.style.display="none";
  return true;
}else{
  message3.style.display="block";
  inputControl.style.border= "solid red"; 
  console.log(message3); 
  return false;
 }
} //on vérifie que la value de emailInput correspond bien à la regex

modalEmail.addEventListener("keyup", emailTest);

//nombre de tournoi
function conditionNumber () {

if (quantity.value >= 0) {
  quantity.style.border= "solid white"; 
  quantity.style.background="white";
  console.log("ok numéro")
  return true;
}else{
  quantity.style.border= "solid red"; 
  quantity.style.background="red";
  console.log ("pas de numéro")
  return false;
 }
}
quantity.addEventListener("keyup", conditionNumber);


let checkbox = document.querySelector(".checkBox:checked");

//Date de naissance  // ne fonctionne pas

function dateDeNaissance(e) {
 let date = new Date() ; // date actuelle
 let birthDate = new Date(modalBirth.value)
console.log(modalBirth.value);

 if (date >= birthDate){
  console.log("date ok");
  message4.style.display="none";
  return true;
 }else{
  message4.style.display="block";
  console.log("date problem");
  return false;
  }
 }

modalBirth.addEventListener("keyup", e => {
  dateDeNaissance(e);
 });

// Un bouton Radio doit être sélectionné.

// radio // faire une boucle

function radio (e) {
  let checkBox = document.querySelector("input[name='location']:checked"); // radio bouton cochée

if (checkBox)
{
   console.log(checkBox.value);
   return true;
}else{
  console.log("aucun check");
  return false;
}
}

modalSubmit.addEventListener ("click",e =>{
  e.preventDefault();
  radio(e);
});


function btnSend () {
  const modaleFin= document.querySelector(".modale-fin");
if (textCheck(modalFirst)==true && textCheck(modalLast)==true && emailTest()==true && conditionNumber()==true && dateDeNaissance()==true && radio()==true){
  console.log ("test ok");
  modaleFin.style.display="block";
  return true;

}else{
  console.log("echec")
  return false;
 }
}

modalSubmit.addEventListener ("click", btnSend);

//let btn = document.getElementById("btn");
//btn.addEventListener("click", function(){
 // alert('Nombre d\'options choisies : ' + quantité(document.selectForm.typesMusique))
//});


  
  //Le formulaire doit être valide quand l'utilisateur clique sur "Submit" (not yet)
 // (5) Un bouton radio est sélectionné. (OK)
  // (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée. (OK)

  // Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.(OK) e.preventDefault()

  // Step 3 
  //Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur 
 // (ex. "Merci ! Votre réservation a été reçue.")

// Step 4 
// Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
//Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)
