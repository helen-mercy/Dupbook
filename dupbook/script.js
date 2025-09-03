var settings= document.querySelector(".settings");
var btn=document.getElementById("btn");
function settingsToggle(){
    settings.classList.toggle("settings-height");

}
btn.onclick=function(){
    btn.classList.toggle("on");
    document.body.classList.toggle("dark");
    let currentTheme = localStorage.getItem("theme");
    if(currentTheme ==="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
};
    
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  btn.classList.add("on");
} else {
  
  document.body.classList.remove("dark");
  btn.classList.remove("on");
  localStorage.setItem("theme", "light");
}
 