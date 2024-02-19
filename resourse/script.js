const busSeat = document.querySelectorAll('.bus-seat');
  

for (let index = 0; index < busSeat.length; index++) {
    const seat = busSeat[index]; 
    seat.addEventListener('click',function(){
         
        const innerText = seat.innerText;  
        backgroundColor(innerText);

        //----- set seat-class-price ----------
        const seatClassPrice = document.getElementById('seat-class-price'); 
        const div = document.createElement('div');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p.innerText = innerText;
        p2.innerText = 'Economoy';
        p3.innerText = '550';
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        seatClassPrice.appendChild(div);
        div.classList.add('flex');
        div.classList.add('justify-between');
        const price = p3.innerText; 

        //-----increase seat count ---------------
        let addSeat = document.getElementById('count-seat');
        const seatCountText = addSeat.innerText
        const  convertSeatNum = parseInt(seatCountText); 
        const newNum = convertSeatNum + 1;
        addSeat.innerText = newNum;  
         

        //-----total price calculate-----------
        const totalPrice = document.getElementById('total-price').innerText;
        const convertPriceNum = parseInt(totalPrice);
        const totalcost = convertPriceNum + parseInt(price);
        document.getElementById('total-price').innerText = totalcost;

        //-----------grand total price calculate---------
        const grantPrice = document.getElementById('grand-price');
        grantPrice.innerText = totalcost;
        
        //------- decrease seat number ------------
        let minusSeat = document.getElementById('total-Seat');
        const seatCount = minusSeat.innerText;
        const convertNum = parseInt(seatCount);
        const minusSeatNum = convertNum - 1;
        minusSeat.innerText = minusSeatNum;
 

        //------ button disabled attribute remove-------
         const inputNumber = document.getElementById('input-number');
         inputNumber.addEventListener('input', function(event){
           const inputText = event.target.value;
           if(inputText >= 0 && inputText <= 9){
            removeElement ('btn-next');
           }
         })
         
        
    }, { once: true } );
 
}

function backgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500');
    element.classList.add('text-white')
} 
function removeElement (elementId){
    const element = document.getElementById(elementId);
    element.removeAttribute('disabled');
}