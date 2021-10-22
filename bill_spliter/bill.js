

const amount = document.getElementById("amount");
const persons = document.getElementById("persons");
const tip = document.getElementById("tip");
const split = document.querySelector("button");
const output = document.getElementById("output");
console.log(split);
split.addEventListener("click", () => {
  let amount_v = amount.value;
  let persons_v = persons.value;
  let tip_v = tip.value;
    if (tip_v > 0)
    {
        let percentage = (tip_v / amount_v) * 100;
        let splited = (parseInt(amount_v) + parseInt(percentage)) / persons_v;
        console.log(splited);
        output.innerHTML = splited;
    }
    else
    {
        
        let splited = parseInt(amount_v) / persons_v;
        console.log(splited);
        output.innerHTML = splited;
    }
});
