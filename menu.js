

let ourNav = document.querySelector(".navbar");
let ourButtons = document.getElementsByTagName("li");
let ourPages = document.querySelectorAll(".stacked");

ourNav.addEventListener("click", (e) => {
    if(!e.target.classList.contains("darktext")){
      for(let i = 0; i < ourButtons.length; i++){
          if(ourButtons[i].classList.contains("darktext")){
              ourButtons[i].classList.remove("darktext");
          }else{
              continue;
          }
      }
       e.target.classList.add("darktext");
       
       for(let k = 0; k < ourPages.length; k++){
           if(ourPages[k].classList.contains("open")){
               ourPages[k].classList.remove("open");
               for(let j = 0; j < ourPages.length; j++){
                   if(ourPages[j].id == "home" && e.target.classList.contains("home")){
                       ourPages[j].classList.add("open");
                   }else if(ourPages[j].id == "products" && e.target.classList.contains("products")){
                      ourPages[j].classList.add("open");
                   }else if(ourPages[j].id == "about" && e.target.classList.contains("about")){
                    ourPages[j].classList.add("open");
                   }else if(ourPages[j].id == "locations" && e.target.classList.contains("locations")){
                    ourPages[j].classList.add("open");
                 }
               }
           }
       }
    }
})