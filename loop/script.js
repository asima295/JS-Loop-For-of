txt8 ="";
for (let i = 1; i <= 10; i++) {  
  txt8 +=  (`2 x ${i} = ${ 2*i}`)+"<br>";
}
document.getElementById("p0").innerHTML=txt8;

txt7 ="";
for (let i = 1; i <= 10; i++) {  
  txt7 +=  (`3 x ${i} = ${3*i}`)+"<br>";
}
document.getElementById("p1").innerHTML=txt7;

let txt1 = "";
for (let i = 1; i <= 10; i++)
txt1 += (`2 x ${i} = ${2 * i}`) +"<br>";
document.getElementById("p3").innerHTML = txt1;

let txt2 = "";
for (let i = 1; i <= 10; i++)
txt2 += (`5 x ${i} = ${5 * i}`) +"<br>";
document.getElementById("p4").innerHTML = txt2;

let txt6 = "";
for (let i = 1; i <= 10; i++)
txt6 += (`9 x ${i} = ${9 * i}`) +"<br>";
document.getElementById("p5").innerHTML = txt6;

let txt3 = "";
for (let i = 1; i <= 10; i++)
txt3 += (`90 x ${i} = ${90 * i}`) +"<br>";
document.getElementById("p6").innerHTML = txt3;

let txt4 = "";
for (let i = 1; i <= 10; i++)
txt4 += (`30 x ${i} = ${30 * i}`) +"<br>";
document.getElementById("p7").innerHTML = txt4;

let txt5  = "";
for (let i = 1; i <= 10; i++)
txt5 += (`1000 x ${i} = ${1000 * i}`) +"<br>";
document.getElementById("p8").innerHTML =txt5;