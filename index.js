// List of Selected Seats
const selectedList = [];


const quantityBtns = document.getElementsByClassName('quantityBtn');

//Setting seat numbers to default
let seatQuantity = 40;
loopBtns(quantityBtns, seatQuantity);

// Booked seat numbers
const bookSeatNumbers = document.getElementById('bookedSeatNum');
bookSeatNumbers.innerText = 0;

// Clearing the Form
document.getElementById('nextBtn').addEventListener('click', function() {
    console.log("Hello world");
    document.getElementById('phone').value = "";
    document.getElementById('passengerName').value = "";
    document.getElementById('email').value = "";
});

// Applying Coupon
document.getElementById('applyCoupon').addEventListener('click', function() {
    if(selectedList.length === 4) {
        const coupon = (document.getElementById('couponValue').value).trim();
        if(coupon.toLowerCase() === "new15") {
            const discount = 2200 * 0.15;
            document.getElementById('grandTotal').innerText = `BDT ${2200 - discount}`;
            document.getElementById('couponBox').remove();
            totalDiv(discount);
        } else if(coupon.toLowerCase() === "couple20") {
            const discount = 2200 * 0.2;
            document.getElementById('grandTotal').innerText = `BDT ${2200 - discount}`;
            document.getElementById('couponBox').remove();
            totalDiv(discount);
        } else {
            alert("Invalid Coupon");
        }
    }
})