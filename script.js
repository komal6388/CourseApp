
let a = 0
let flag = true
let menu = ()=>{
  let nav = document.querySelector(".nav")
  if(a==0){
    nav.classList.add("me")
    a = 1
    flag = false
  }
  else{
    nav.classList.remove("me")
    a = 0
    flag = true
  }
}
let login = ()=>{
  
  if(flag == true){
  let row = document.querySelector(".row2")
  row.style.display = "flex"}
  else{
    alert("kindly close the navbar")
  }
}
let cross = ()=>{
  let row = document.querySelector(".row2")
  row.style.display = "none"
}
