let dugme = document.getElementsByTagName("button");
//console.log(dugme);
let ekran = document.getElementById("sonuc")
let hesap = document.getElementById("hesapla");
let temizle = document.querySelector(".cleary")
for (var i=0;i<16; i++) {
    if (i != 13 && i != 14){
dugme[i].addEventListener("click",yazdir)
}
}

function yazdir(){
    
    //console.log("tikalndi"); 
    ekran.value = ekran.value + this.value
}


temizle.addEventListener("click", temiz)

function temiz() {
    ekran.value = " "
}
hesap.addEventListener("click",hesapla)
function hesapla() {
    ekran.value = eval(ekran.value)
};

