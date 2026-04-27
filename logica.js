let n=document.getElementById("n")
let n2=document.getElementById("n2")
let b=document.getElementById("b")
let r=document.getElementById("r")
let resultado
let suma1
let suma2

b.addEventListener("click",suma)

function suma (){
    suma1=Number(n.value)
    suma2=Number(n2.value)

    resultado=suma1+suma2

    r.textContent=("el resultado es: "+resultado)
}