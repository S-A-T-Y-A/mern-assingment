
const btn=document.querySelector(".button");
const form=document.querySelector(".card");
form.style.display="none";
btn.addEventListener("click",()=>{
    form.classList.toggle("card_show");
})