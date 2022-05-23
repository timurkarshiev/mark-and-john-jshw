const text = document.querySelector('.text');

const markWeiht = Number(prompt("Makrni vaznini kiriting"));
const markHeight = Number(prompt("Makrni uzunligi kiriting"));

const johnWeiht = Number(prompt("Johnni vaznini kiriting"));
const johnHeight = Number(prompt("Johnni uzunligi kiriting"));

const markBMI =(markWeiht / (markHeight * markHeight))
const johnBMI =(johnWeiht / (johnHeight * johnHeight))

console.log("Mark BIM " + markBMI);
console.log("John BMI " + johnBMI);

if (markBMI > johnBMI){
    text.textContent = (`Markning vazni ${markWeiht} boyi ${markHeight} BMI ${markBMI} bu Johnnikidan katta Jonning vazni ${johnWeiht}  boyi ${johnHeight} BMI ${johnBMI}`)
}else {
    text.textContent = (`
    Jonning vazni ${johnWeiht}  boyi ${johnHeight} BMI ${johnBMI} bu Marknikidan katta Markning vazni ${markWeiht} boyi ${markHeight} BMI ${markBMI}
    `)
}

console.log(text);