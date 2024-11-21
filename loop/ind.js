let txt = "";
for (let i = 2; i <= 20; i++) {      
  txt +=  (`2*${i}=${2*i}`)+"<br>";
}

document.getElementById("demo").innerHTML = txt;    