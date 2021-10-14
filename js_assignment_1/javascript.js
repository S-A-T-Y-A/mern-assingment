// question one =>switch program to get day name by day number

// get the buttons
const question_1=document.querySelector(".q1");
const question_2=document.querySelector(".q2");
const question_3=document.querySelector(".q3");
console.log(question_3)
const q1_area=document.querySelector(".question_area");
const q2_area=document.querySelector(".question_2");
const q3_area=document.querySelector(".question_3");
// question 1
function q1(){
    if(q2_area.style.display!='none'){
        q2_area.style.display='none';
        q1_area.style.display='flex';
    } 
    else if(q3_area.style.display!='none'){
        q3_area.style.display='none';
        q1_area.style.display='flex';
    }


// q1_area.classList.toggle('question_area_show');
let q1_input=document.getElementById("q1_input");
console.log(q1_input);
let input=q1_input.value;
const q1_btn=document.querySelector(".q1_btn");
const q1_ans=document.querySelector(".q1_ans");
const weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
q1_btn.addEventListener('click',()=>{
        const date=new Date(q1_input.value);
        if(q1_input.value==undefined){
            console.log("satya");
        }
        q1_ans.innerHTML=weekdays[date.getDay()];
})

}
question_1.addEventListener('click',q1);

function q2(){
    if(q1_area.style.display!='none'){
        q1_area.style.display='none';
        q2_area.style.display='flex';
        
    } 
    else if(q3_area.style.display!='none'){
        q3_area.style.display='none';
        q2_area.style.display='flex';
    }
    // q2_area.classList.toggle("question_area_show");
    
    document.getElementById("q2_btn").addEventListener('click',()=>{
        const q2_input=prompt("enter the value to push into the array !");
        const array=document.getElementById("array");
        let my_array=['satya','pavan'];
        my_array.push(q2_input);
        
        array.innerHTML=my_array;

    })
     


}
question_2.addEventListener('click',q2);

function q3(){
    if(q1_area.style.display!='none'){
        q1_area.style.display='none';
        q3_area.style.display='flex';
        
    } 
    else if(q2_area.style.display!='none'){
        q2_area.style.display='none';
        q3_area.style.display='flex';
    }
    
    // q3_area.classList.toggle('question_area_show');

    // acces the buttons
    const name_btn=document.getElementById("name3");
    const query_btn=document.getElementById("query3");
    const show_btn=document.getElementById("show3");

    // add prompt to btn
    name_btn.addEventListener('click',()=>{
        const name_in=prompt("please enter your name ?");
        document.getElementById("name").innerText=name_in;
    })
    query_btn.addEventListener('click',()=>{
        const query_in=prompt("please enter your query ?");
        document.getElementById("query").innerText=query_in;
    })
    show_btn.addEventListener('click',()=>{
        document.getElementById("name").style.display='block';
        document.getElementById("query").style.display='block';
        let ampm="AM";
        let date=new Date()
        let hour=date.getHours();
        const minutes=date.getMinutes();
        const time= document.getElementById("time");
        console.log(hour)
        if(hour>=9 && hour<=24 ){
            time.style.display="block";
            
        }
        if(hour>12 && hour<=24){
            hour= hour % 12;
            ampm="PM";
        }
        if(hour<=9){
            hour="0"+hour;
        }
        console.log(hour)
       

        time.innerText=hour+":"+minutes+' '+ampm;
        
    })
}
question_3.addEventListener('click',q3);