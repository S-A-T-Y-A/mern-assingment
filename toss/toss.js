const coin=document.querySelector(".coin");
const toss=document.querySelector(".coin h1")
const btn=document.querySelector(".button");
const btn_txt=document.querySelector(".button a");
const flip_block=document.querySelector(".count");
const flip_count=document.querySelector(".count_txt")
let no_of_flips=0
const toss_list=["Head","Tail"];
btn.addEventListener("click",()=>{
    let flip_num=Math.floor(Math.random()*2);
    toss.innerHTML=toss_list[flip_num]
    no_of_flips++;
    console.log(no_of_flips)
    coin.classList.add("coin_show")
    flip_block.style.display="flex";
    btn_txt.innerHTML="Flip"
    flip_count.innerHTML=no_of_flips-1;

    
})
