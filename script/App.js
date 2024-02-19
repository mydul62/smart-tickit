const addedCardIds = [];
addCounter()
function addCounter() {
  const buttons = document.getElementsByClassName('btn-add-card');
  const begCount = document.getElementById('beg-count');
  let count = parseInt(begCount.innerText);
  const limitAlert = document.getElementById('limit-alert');

  for (const button of buttons) {
    button.addEventListener('click', () => {
      if (count < 4) {
        const buttonId = button.innerText;
        if (!addedCardIds.includes(buttonId)) {
          count++;
          begCount.innerText = count;
          removeCounter();
          addCard(buttonId);
          totalCost(count);
          addCuponanable();
          button.classList.add("bg-[#1DD100]");
          addedCardIds.push(buttonId);
        } 
      } else {
        limitAlert.classList.remove('hidden')
      }
    });
  }
}
function removeCounter(){
  const totalSeat=document.getElementById('total_sets');
  let seats = parseInt(totalSeat.innerText);
  totalSeat.innerText = (seats-1);
}

function addCard(buttonId){
  const cardHolher=document.getElementById('card-holder');
  
  cardHolher.innerHTML +=`<div  class="flex justify-between items-center gap-2  pb-4 ">
  <h2 class="text-[18px] font-semibold inter text-[#03071299]">${buttonId}</h2>
  <h2 class="text-[18px] font-semibold inter text-[#03071299]">
    Economoy
  </h2>
  <h2 class="text-[18px] font-semibold inter text-[#03071299]">
    550
  </h2>
</div>`
}
function totalCost(items){
const TotalPrice = items * 550;
const priceSelector = document.getElementById('total-price');
const grandPriceCell = document.getElementById('grand-price')
priceSelector.innerText =TotalPrice;
grandPriceCell.innerText=TotalPrice;
}
// function setBackgroundColor(elementClass) {
  
// }
function addCuponanable() {
  const begCount=document.getElementById('beg-count');
  let count = parseInt(begCount.innerText)
  const cupon = document.getElementById('cupon');
  if (count ==4) {
    cupon.removeAttribute('disabled');
  }


}
function addCupon() {
  const cupon = document.getElementById('cupon').value;
  const cuponId = document.getElementById('cuppon-section');
  const showDiscount = document.getElementById('show-discount')
  const newOffer = document.getElementById('offerFify').innerText;
  const coupleOffer = document.getElementById('coupleTewnty').innerText;
  let grandPriceCell = document.getElementById('grand-price');
  let grandPrice = document.getElementById('grand-price').innerText;
  const discount = document.getElementById('discount');
  const alert =document.getElementById('alert');

  if (cupon === newOffer) {
    NowGPrice = grandPrice -(grandPrice * 0.15)
    grandPriceCell.innerText=NowGPrice;
    discount.innerText=(grandPrice * 0.15);
    cuponId.classList.add('hidden');
    showDiscount.classList.remove('hidden');
  } else if (cupon === coupleOffer) {
    NowGPrice = grandPrice-(grandPrice * 0.20);
    grandPriceCell.innerText=NowGPrice;
    discount.innerText=(grandPrice * 0.20);
    cuponId.classList.add('hidden');
    showDiscount.classList.remove('hidden');
  }else{
    alert.classList.remove('hidden');
  }

}

function removeAlert(){
  const alert =document.getElementById('alert');
  alert.classList.add('hidden');
}

function removeAlertLimit(){
  const limitAlert = document.getElementById('limit-alert');
  limitAlert.classList.add('hidden');
}



function modal(){
  const begCount=document.getElementById('beg-count');
  let count = parseInt(begCount.innerText)
  console.log(count)
  const phoneNumber = document.getElementById('Phone-number');
  const phone =phoneNumber.value;
  if(count>=1 && phone >0){
    my_modal_5.showModal()
  }
  
}