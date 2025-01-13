let imgbox = document.querySelector("#imgBox");
let qrimg = document.querySelector("#qrimg");
let qrtext = document.querySelector("#qrtext");
let btn = document.querySelector("button");
//para is activated if user put no input
let para = document.querySelector("p");

function generateQR() {
  if (qrtext.value == "") {
    para.style.display = "block";
    imgbox.style.display = "none";
  } else {
    para.style.display = "none";
    setTimeout(()=>{
        imgbox.style.display = "block";
        qrimg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    },4000)
    
  }
}
btn.addEventListener("click", generateQR);
