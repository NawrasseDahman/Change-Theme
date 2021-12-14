function changeTheme(){
  var container = document.querySelector(".browser");
  document.querySelector(".light-btn").onclick=function(){
    container.classList.add("light");
    container.classList.remove("dark");
    container.classList.remove("blue");
  }
  document.querySelector(".dark-btn").onclick=function(){
    container.classList.add("dark");
    container.classList.remove("light");
    container.classList.remove("blue");
  }
  document.querySelector(".blue-btn").onclick=function(){
    container.classList.add("blue");
    container.classList.remove("light");
    container.classList.remove("dark");
  }
}
changeTheme();
