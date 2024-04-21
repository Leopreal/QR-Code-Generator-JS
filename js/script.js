const container = document.querySelector(".container");
const qrcodebtn = document.querySelector("#qr-form button");

const qrcodeinput = document.querySelector("#qr-form input");

const qrcodeimg = document.querySelector("#qr-code img")

// funções


// GErar Qr code
function geradordeQR() {
    const valordoinput = qrcodeinput.value;

    if(!valordoinput) return;

    qrcodebtn.innerText = "Gerando o código..."

    qrcodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valordoinput}`

    qrcodeimg.addEventListener("load", () => {
        container.classList.add("actived")
        qrcodebtn.innerText = "Código Gerado com Sucesso."
    })

   
}

qrcodebtn.addEventListener("click", () => {
    geradordeQR();
})

qrcodeinput.addEventListener("keydown", (Event) => {
    if(Event.code === "Enter"){
        geradordeQR();
    }
})

//limpar tela

qrcodeinput.addEventListener("keyup", () => {

    if(!qrcodeinput.value){
        container.classList.remove("actived")
        qrcodebtn.innerText = "Gerar novo QR-Code"
    }

})