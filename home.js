console.log('i am connected')
function getIdelemet(id){
    const element = document.getElementById(id);
    return element;
}
function getClassElement(value){
    const classElement = document.getElementsByClassName(value);
    return classElement
}

const callBtns = document.getElementsByClassName('call-btn')
const callCost = 20
for( let callBtn of callBtns){
    callBtn.addEventListener('click', function(){
        const availableCoin = getIdelemet('currentCoin').innerText;
        const remainingCost = availableCoin - callCost;
        document.getElementById('currentCoin').innerText= remainingCost;


    })
    
}