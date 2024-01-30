let title=document.querySelector('.name');
let input=document.querySelector(".input")
let bulb=document.querySelector(".bulb")
input.addEventListener("change",()=>{
    title.style.display="block"
    title.innerHTML=`hi... ${input.value} welcome to our world  `;
    input.style.display="none"
    bulb.style.backgroundColor="yellow";
    bulb.style.boxShadow=" 2px 9px 12px 0px rgb(181, 201, 68) "
})