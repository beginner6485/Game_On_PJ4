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
const modalBd = document.querySelector(".modal-body");
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
const message6= document.querySelector(".message6");
const message7= document.querySelector(".message7");
const quantity= document.getElementById ("quantity");
const boutonRadio= document.querySelector("radio"); 
const conditionCase = document.querySelector("checkbox");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form (ferme la fenêtre)
function launchModal() {
  modalbg.style.display = "block"; 
}

// on vérifie que l'input est complet
function textCheck(inputControl) {

if(inputControl.value.length < 2) { 
  inputControl.style.border= "solid red"; 
  message.style.display="block";
  message2.style.display="block";
  message.style.color="red";
  message2.style.color="red";
  return false;
}else{
  inputControl.style.border= "white"; 
  inputControl.style.background= "white";
  message.style.display="none";
  message2.style.display="none";
  return true;
 }
}
//vérifie que l'input se rempli
modalFirst.addEventListener("keyup",e => {
  textCheck(modalFirst);
}); 

//vérifie que l'input se rempli
modalLast.addEventListener("keyup", e => {
  textCheck(modalLast);
});

// on vérifie que l'email est complet
function emailTest (){
let emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
if (emailRegex.test(modalEmail.value)) {
  message3.style.display="none";
  modalEmail.style.border= "none"; 
  return true;
}else{
  message3.style.display="block";
  modalEmail.style.border= "solid red"; 
  message3.style.color= "red"
  return false;
 }
} //on vérifie que la value de emailInput correspond bien à la regex

modalEmail.addEventListener("keyup", emailTest);

//nombre de tournoi
function conditionNumber () {

if (quantity.value >= 0) {
  quantity.style.border= "none"; 
  quantity.style.background="white";
  return true;
}else{
  quantity.style.border= "solid red"; 
  quantity.style.background="red";
  quantity.style.color= "red"
  return false;
 }
}
quantity.addEventListener("keyup", conditionNumber); 


let checkbox = document.querySelector(".checkBox:checked");


function dateDeNaissance(e) {
 let today = new Date() ; // date actuelle
 let birthDate = new Date(modalBirth.value)

 let adulTage = new Date("2006-01-01");

 if (birthDate <= today && birthDate <= adulTage){
  message4.style.display="none";
  modalBirth.style.border= "none"; 
  return true;
 }else{
  message4.style.display="block";
  modalBirth.style.border= "solid red";
  message4.style.color= "red";
  return false;
  }
 }

modalBirth.addEventListener("input", e => {
  dateDeNaissance(e);
 });

function quantityCheck(){
  if(quantity.value && quantity.value > 0){
    message5.style.display = "none";
    quantity.style.border ="none"
    return true
  }else{
    message5.style.display = "block";
    quantity.style.border ="solid red";
    message5.style.color="red";
    return false
  }
}

function radio (e) {
  let checkBox = document.querySelector("input[name='location']:checked"); // radio bouton cochée
  if (checkBox){
  message6.style.display= "none"
   return true;
   
  }else{
  message6.style.display= "block"
  message6.style.color="red"
  return false;
}
}

function conditionRespect(){
  let conditionCase = document.querySelector("input[type='checkbox']:checked")
  if(conditionCase){
    message7.style.display = "none"
    return true
  }else{
    message7.style.display = "block"
    message7.style.color="red"
    return false
  }
}

modalSubmit.addEventListener ("click",e =>{
  e.preventDefault();
  radio(e);
});

function appel(){
  let bool = true
  textCheck(modalFirst) == false ? bool = false : ""
  textCheck(modalLast) == false ? bool = false : ""
  emailTest() == false ? bool = false : ""
  conditionNumber() == false ? bool = false : ""
  dateDeNaissance() == false ? bool = false : ""
  radio() == false ? bool = false : ""
  quantityCheck() == false ? bool = false : ""
  conditionRespect() == false ? bool = false : ""
  return bool
} // permet de vérifier que tous les champs du formulaire ont été remplis

function btnSend () {
  let modaleFin= document.querySelector(".modale-fin");
if (appel()== true){
  modaleFin.style.display="flex";
  modalBd.style.display="none";
  return true;

}else{
  return false;
 }
}

function logFormDataRealTime() {
  if (appel()){ // Vérifie si appel() retourne true
  const firstName = modalFirst.value;
  const lastName = modalLast.value;
  const email = modalEmail.value;
  const birthdate = modalBirth.value;
  const quantityValue = quantity.value;
  const radioChecked = document.querySelector("input[name='location']:checked");

  console.clear(); // Effacer la console à chaque mise à jour
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Birthdate:", birthdate);
  console.log("Quantity:", quantityValue);
  console.log("Radio Checked:", radioChecked ? radioChecked.value : "None");
  }
}

// Ajouter des écouteurs d'événements pour chaque champ de formulaire
modalFirst.addEventListener("input", logFormDataRealTime);
modalLast.addEventListener("input", logFormDataRealTime);
modalEmail.addEventListener("input", logFormDataRealTime);
modalBirth.addEventListener("input", logFormDataRealTime);
quantity.addEventListener("input", logFormDataRealTime);
document.querySelectorAll("input[name='location']").forEach((radio) => {
  radio.addEventListener("change", logFormDataRealTime);});

modalSubmit.addEventListener ("click", btnSend); // permet de valider le formulaire

let finishModale = document.querySelector(".button-close") // vient clore la modale du message de confirmation.

finishModale.addEventListener("click",closeModale)

function closeModale(){
   let modale = document.querySelector(".bground")
   modale.style.display="none";
}
