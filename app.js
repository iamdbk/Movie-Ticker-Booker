const movie = document.querySelector("#movie");

const onlySeats = document.querySelector(".only-seats");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
let selectedSeats;
let ticketPrice = +movie.value;
function priceAndSeats() {
  selectedSeats = document.querySelectorAll(".col  .seat.selected").length;
  total.innerText = +ticketPrice * selectedSeats;
  count.innerText = selectedSeats;
}

onlySeats.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    priceAndSeats();
  }
});

movie.addEventListener("change", function (e) {
  ticketPrice = +e.target.value;
  priceAndSeats();
});

// const container = document.querySelector(".container");
// const seats = document.querySelectorAll(".col>.seat:not(.occuppied)");
// const count = document.querySelector("#count");
// const total = document.querySelector("#total");
// const select = document.querySelector("#movie");
// // const ticketPrice = +select.value;
// let seatSelected;
// let ticketPrice = +select.value;

// // console.log(ticketPrice);

// select.addEventListener("change", function (e) {
//   ticketPrice = +e.target.value;
//   console.log(e.target.value);
//   seatSelected = document.querySelectorAll(".col>.seat.selected").length;
//   console.log(seatSelected);
//   count.innerText = seatSelected;
//   total.innerText = seatSelected * ticketPrice;
// });

// container.addEventListener("click", function (e) {
//   if (
//     e.target.classList.contains("seat") &&
//     !e.target.classList.contains("occupied")
//   ) {
//     e.target.classList.toggle("selected");
//     seatSelected = document.querySelectorAll(".col>.seat.selected").length;
//     count.innerText = `${seatSelected}`;
//     total.innerText = seatSelected * ticketPrice;
//   }
// });
