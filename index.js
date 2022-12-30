const cardNumber = document.getElementById('number');
const numberInp = document.getElementById('card-number');

const cardName = document.getElementById('name');
const nameInp = document.getElementById('card-name');

const cardMonth = document.getElementById('month');
const monthInp = document.getElementById('card-month');

const cardYear = document.getElementById('year');
const yearInp = document.getElementById('card-year');

const cardCvc = document.getElementById('cvc');
const cvcInp = document.getElementById('card-cvc');

const submitBtn = document.getElementById('submit');

const completed = document.querySelector('.thank-you');
const form = document.querySelector('form');

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = formatName(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}
function formatName(s) {
  return s.toUpperCase();
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInp.value) {
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message");
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }
  if (!numberInp.value) {
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error_message");
  } else if (numberInp.value.length < 16) {
    numberInp.classList.add("error")
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
  }
  if (!monthInp.value) {
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
  } else if (monthInp.value.length < 2) {
    monthInp.classList.add("error")
  } else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message");
  }
  if (!yearInp.value) {
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
  } else if (yearInp.value.length < 2) {
    yearInp.classList.add("error")
  } else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message");
  }
  if (!cvcInp.value) {
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
  } else if (cvcInp.value.length < 3) {
    cvcInp.classList.add("error")
    cvcInp.parentElement.classList.remove("error_message");
  } else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message");
  }
  if(nameInp.value && numberInp.value.length === 16 && monthInp.value.length === 2 && yearInp.value.length === 2 && cvcInp.value.length === 3) {
    completed.classList.remove('hidden');
    form.classList.add('hidden')
  }
}


numberInp.addEventListener("keyup", setCardNumber)
nameInp.addEventListener("keyup", setCardName)
monthInp.addEventListener("keyup", setCardMonth)
yearInp.addEventListener("keyup", setCardYear)
cvcInp.addEventListener("keyup", setCardCvc)
submitBtn.addEventListener("click", handleSubmit)
















