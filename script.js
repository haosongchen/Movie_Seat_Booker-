const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const total = document.getElementById("total");
const count = document.getElementById("count");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

//update count and total
const updateSelectedCount = () => {
  const selectedSeat = document.querySelectorAll(".row .seat.selected");

  const selectedCount = selectedSeat.length;
  count.innerHTML = `<span id="count">${selectedCount}</span>`;
  total.innerHTML = selectedCount * ticketPrice;
};

//event delegation
//seat select event

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

//movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});
