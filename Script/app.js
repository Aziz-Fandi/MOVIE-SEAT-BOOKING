// const seats = document.querySelectorAll(
//   '.container-seats .seat:not(.Occupied , .pink)'
// );
const container = document.querySelector('.container-seats-screen');
const count = document.querySelector('.count');
const total = document.querySelector('.total');
const selectMovie = document.querySelector('#select-movie');
let ticketPrice = +selectMovie.value;
//_________________________________________________________________________

//Update count & Total
const updateCount = () => {
  const selectedSeats = document.querySelectorAll(
    '.container-seats-screen .seat.selected'
  );

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

//Change Movie
selectMovie.addEventListener('change', (event) => {
  ticketPrice = event.target.value;
  updateCount();
});

// click on the seats
container.addEventListener('click', (event) => {
  if (
    event.target.classList.contains('seat') &&
    !event.target.classList.contains('Occupied') &&
    !event.target.classList.contains('pink')
  ) {
    event.target.classList.toggle('selected');
    updateCount();
  }
});
