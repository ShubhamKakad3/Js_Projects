// Movie List Array
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
  
  // Select elements
  const selectMovie = document.getElementById("selectMovie");
  const movieName = document.getElementById("movieName");
  const moviePrice = document.getElementById("moviePrice");
  const seatContainer = document.getElementById("seatCont");
  const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
  const totalSeats = document.querySelectorAll("#seatCont .seat");
  const totalPrice = document.getElementById("totalPrice");
  const continueBtn = document.getElementById("proceedBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  
  let selectedMovie = moviesList[0]; // Initialize with the first movie
  let selectedSeats = [];
  
  // Populate the dropdown with movie options
  moviesList.forEach((movie, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = movie.movieName;
    selectMovie.appendChild(option);
  });
  
  // Event listener for movie selection
  selectMovie.addEventListener("change", (event) => {
    selectedMovie = moviesList[event.target.value];
    updateMovieInfo();
  });
  
  // Event listener for seat selection
  totalSeats.forEach((seat, index) => {
    seat.dataset.seat = index + 1; // Assign a seat number
    seat.addEventListener("click", () => {
      toggleSeatSelection(seat);
    });
  });
  
  // Event listener for Continue button
  continueBtn.addEventListener("click", () => {
    if (selectedSeats.length === 0) {
      alert("Oops, no seat selected!");
    } else {
      alert("Yay! Your seats have been booked.");
      selectedSeats.forEach((seat) => {
        seat.classList.remove("selected");
        seat.classList.add("occupied");
      });
      updateTotalPrice();
      resetSelectedSeats();
    }
  });
  
  // Event listener for Cancel button
  cancelBtn.addEventListener("click", () => {
    selectedSeats.forEach((seat) => {
      seat.classList.remove("selected");
    });
    resetSelectedSeats();
    updateTotalPrice();
  });
  
  // Function to update movie info
  function updateMovieInfo() {
    movieName.textContent = selectedMovie.movieName;
    moviePrice.textContent = `$ ${selectedMovie.price}`;
    updateTotalPrice();
  }
  
  // Function to toggle seat selection
  function toggleSeatSelection(seat) {
    if (seat.classList.contains("occupied")) {
      return; // Do nothing for occupied seats
    }
  
    seat.classList.toggle("selected");
    selectedSeats = Array.from(document.querySelectorAll(".seat.selected"));
    updateTotalPrice();
    updateSelectedSeatsHolder();
  }
  
  // Function to update the total price
  function updateTotalPrice() {
    totalPrice.textContent = `$ ${selectedSeats.length * selectedMovie.price}`;
  }
  
  // Function to update the selected seats holder
  function updateSelectedSeatsHolder() {
    if (selectedSeats.length === 0) {
      selectedSeatsHolder.innerHTML = '<span class="noSelected">No Seat Selected</span>';
    } else {
      selectedSeatsHolder.innerHTML = selectedSeats.map((seat) => seat.dataset.seat).join(", ");
    }
  }
  
  // Function to reset selected seats
  function resetSelectedSeats() {
    selectedSeats = [];
    updateSelectedSeatsHolder();
  }
  
  // Initial setup
  updateMovieInfo();
  