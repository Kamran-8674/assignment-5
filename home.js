console.log('i am connected')
function getIdelemet(id){
    const element = document.getElementById(id);
    
 return element;
}
function getClassElement(value){
    const classElement = document.getElementsByClassName(value);
    return classElement
}


const callCost = 20
const date=new Date().toLocaleTimeString();

// heart button


const heartBtns = getClassElement('heart-btn')
for(let heart of heartBtns){
    heart.addEventListener('click',function(){
        heart.classList.add('text-red-500')
        const heartNumber =getIdelemet('heart-number').innerText;
        const newCopyNumber= Number(heartNumber)+1;
        getIdelemet('heart-number').innerText=newCopyNumber
        

    })
    
}



// call button

const callBtns = document.getElementsByClassName('call-btn')
for( let callBtn of callBtns){
    callBtn.addEventListener('click', function(){
        const availableCoin = getIdelemet('currentCoin').innerText;
        const cardTitle =callBtn.parentNode.parentNode.children[1].innerText
        
        const cardNumber = callBtn.parentNode.parentNode.children[3].innerText
        
        if(availableCoin<20){
            alert('You do not have sufficient coin')
            return
        }
        else(
            alert(cardTitle,cardNumber)
            
        )
       
        const remainingCost = Number (availableCoin) - Number (callCost);
        document.getElementById('currentCoin').innerText= remainingCost;

        const cardContainer = getIdelemet('historyContainer');

        const newElement = document.createElement('div');
        newElement.innerHTML=` <div class="flex justify-between shadow-sm bg-[#FAFAFA]  shadow-[#00000026] mt-2 p-2 rounded-lg">
                <div>
                    <h5 class="font-semibold">${cardTitle}</h5>
                    <p class="text-sm text-gray-400">${cardNumber}</p>
                </div>
                <div id="time">
                
                    
                </div>
            </div> 
        `
        
        cardContainer.appendChild(newElement)

        getIdelemet('time').innerText = new Date().toLocaleTimeString();



    })
    
}

// copybutton
getIdelemet('cardContainerrr').addEventListener('click',function(e){
    if(e.target.className.includes('copy-btn')){
        
        alert('Copied')
        const copyNumber =getIdelemet('copy-current-number').innerText;
        const newCopyNumber= Number(copyNumber)+1;
        getIdelemet('copy-current-number').innerText=newCopyNumber

    
     

        
       }
    })








// clear button


getIdelemet('clear-btn').addEventListener('click', function(){
    const cardContainer=  getIdelemet('historyContainer')
    cardContainer.innerHTML=""

    

    
    
})



 