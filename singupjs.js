// const container = document.querySelector(".container"),
//       pwShowHide = document.querySelectorAll(".img"),
//       pwFields = document.querySelectorAll(".password");




//       pwShowHide.forEach(eyeIcon => {
//         eyeIcon.addEventListener("click", () =>{
//             pwFields.forEach(pwFields =>{
//                 if(pwFields.type ==="password"){
//                     pwFields.type = "text";
//                 }else{
//                     pwFields.type = "password";
//                 }
//             })
//         })
//       })

function saveData(){
let names = document.getElementById("name").value;
let email = document.getElementById("email").value;
let emails = document.getElementById("emails").value;
let zip = document.getElementById("zip").value;
let password = document.getElementById("password").value;
let number = document.getElementById("number").value;

let user_record = new Array();
user_record=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]

user_record.push({
    "name": names,
     "email": email,
     "email": emails,
     "zip" : zip,
     "password": password,
     "number" : number,

})

localStorage.setItem("user" , JSON.stringify(user_record))


}