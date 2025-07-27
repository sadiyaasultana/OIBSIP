document.getElementById("cabForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const booking = {
    source: document.getElementById("source").value,
    destination: document.getElementById("destination").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Cab booked successfully!");
});