
const menumbg = document.querySelector("#menu-mbg img");
menumbg.addEventListener("click",(e)=>{
    const list2 = document.getElementById("ul2");
    
    if(list2.className=="active")
    {
        list2.classList.remove("active");
        list2.classList.add("inactive")
    }else{
        list2.classList.remove("inactive");
        list2.classList.add("active")
    }
    e.stopPropagation();
    e.preventDefault();
})



