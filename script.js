let studentPoint = prompt("To'plagan ballingizni kiriting: ", 0) -0;
const elHeader = document.querySelector('.header');
const minPoint = 80;
const superContractPoint = 120;
const contractPoint = 150;
const maxPoint = 200;
let studentMoney;
const superContractMoney = 3000;
const contractMoney = 2000;
let studentConfirm;
if (studentPoint < minPoint) {
    elHeader.textContent = "O'qishga kira olmadingiz :(";
}
else if (studentPoint >= minPoint && studentPoint < superContractPoint) {
    let confirmStudent = confirm(' Siz super kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 3000$ \n Rozimisiz ?')
    if (confirmStudent) {
        studentMoney = +prompt("Qancha pulingiz bor: ", 0);
        if (studentMoney < superContractMoney){
            elHeader.textContent = "Siz o'qiy olmaysiz :(";
        }
        else {
            elHeader.textContent = "O'qishga omad!";
        }
    }
    else {
        elHeader.textContent = "Keyingi til urinib ko'ring!";
    }
}
else if (studentPoint >= superContractPoint && studentPoint < contractPoint) {
    let confirmStudent = confirm(' Siz kontrakt asosida o\'qishga tavsiya qilindingiz kontrakt miqdori 2000$ \n Rozimisiz ?')
    if (confirmStudent) {
        studentMoney = +prompt("Qancha pulingiz bor: ", 0);
        if (studentMoney < contractMoney){
            elHeader.textContent = "Siz o'qiy olmaysiz :(";
        }
        else {
            elHeader.textContent = "O'qishga omad!";
        }
    }
    else {
        elHeader.textContent = "Keyingi til urinib ko'ring!";
    }
}
else if (studentPoint >= contractPoint && studentPoint < maxPoint) {
    elHeader.textContent = "Siz budjet asosida o'qishga qabul qilindingiz!";
}
else {
    elHeader.textContent = "Ballarni xato kiritdingiz :(";
}