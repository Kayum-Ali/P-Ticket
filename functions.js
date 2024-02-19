//Functions for the whole code
function loopBtns(btns, value) {
    for(let i = 0; i < btns.length; i++) {
        btns.item(i).innerText = `${value} Seats Left`;
    }
};

function totalDiv(discounted) {
    const div = document.createElement("div");
    div.classList.add('flex', 'justify-between', 'px-7', 'mt-4', 'text-black', 'font-extrabold');
    div.id = "discountDiv";
    const h3 = document.createElement("h3");
    h3.innerText = "Discounted Price";
    const disH3 = document.createElement("h4").innerText = `BDT -${discounted}`;
    div.append(h3);
    div.append(disH3);

    document.getElementById("pricingArea").append(div);
}


function updateSelectedList(event) {
    const id = event.target.id;
    if(selectedList.length < 4 && !selectedList.includes(id)) {
    selectedList.push(id);
    const btn = document.getElementById(id);
    btn.style.backgroundColor = "#1DD100";
    btn.style.color = "#fff";

    // Changing seat quantity after seat selection
    seatQuantity--;
    loopBtns(quantityBtns, seatQuantity);

    // Appending ticket details
    const listDiv = document.createElement('div');
    const ticketNum = document.createElement('h3');
    const price = document.createElement('h3').innerText = 550;
    const seatType = document.createElement('h3');
    listDiv.classList.add('flex', 'justify-around', 'mt-5' );
    listDiv.id = `${id}Details`;
    ticketNum.innerText = id;
    ticketNum.classList.add('uppercase');
    seatType.innerText = "Economy";
    listDiv.append(ticketNum);
    listDiv.append(seatType);
    listDiv.append(price);
    document.getElementById('ticketDetails').append(listDiv);

    // Increasing Booked Seat Numbers;
    bookSeatNumbers.innerText = selectedList.length;

    //Enabling coupon input
    if(selectedList.length === 4) {
        document.getElementById('couponValue').disabled = false;
    }
    } else if (selectedList.includes(id)) {
        document.getElementById(`${id}Details`).remove();
        document.getElementById(id).style.backgroundColor = '#f2f2f2';
        document.getElementById(id).style.color = '#1F2937';
        const seatIndex = selectedList.indexOf(id);
        selectedList.splice(seatIndex, 1);

    // Changing seat quantity after seat selection
    seatQuantity++;
    loopBtns(quantityBtns, seatQuantity);
    
    // Decreaseing Booked Seat Numbers
    bookSeatNumbers.innerText = selectedList.length;

    // Disabling coupon input
    if(selectedList.length < 4) {
        document.getElementById('couponValue').disabled = true;
    }
}



    //updating the price
    const totalPrice = 550 * selectedList.length;
    document.getElementById('totalPrice').innerText = `BDT ${totalPrice}`;
    document.getElementById('grandTotal').innerText = `BDT ${totalPrice}`;
}
// End of Code functions
