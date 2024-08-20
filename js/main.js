
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



const textElement = document.getElementById("text-hero");

const text = "Christian Celis"
let index = 1;
speed = 300 / 2;

const writeText = () => {
    textElement.innerText = text.slice(0, index)
    index++

    if (index > text.length) {
        index = 1
    }

    setTimeout(writeText, speed)
}


writeText()
