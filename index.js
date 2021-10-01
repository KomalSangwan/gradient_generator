var gradient_code=document.querySelector("h4");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var gradient=document.getElementById("gradient");
var type_gradient=document.querySelector("#grad_type");

function generateGradient() {
    gradient.style.background = "linear-gradient("+ type_gradient.value+ ", "
    + color1.value 
    + ", "   
    + color2.value + ")";
    gradient_code.innerText = gradient.style.background + ";";
   }

color1.addEventListener("input", generateGradient);
color2.addEventListener("input", generateGradient);
type_gradient.addEventListener("input", generateGradient);
