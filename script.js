const container = document.querySelector(".container");
var count = document.getElementById('count');
var amount = document.getElementById('amount');
var movie = document.getElementById('movie');
var seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
    {
       e.target.classList.toggle('selected');

       Total();
    }
});

movie.addEventListener('change', function(e){
     
    Total();
    
});

function Total(){
    const selectedSeats = container.querySelectorAll(".seat.selected");
  
    // console.log(seats);
    

    let selectedSeatsArr;
    let seatsArr;
 
    
    selectedSeatsArr.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
    
    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })

    console.log(selectedSeatIndexs);

    let SelectSeatCount = selectedSeats.length;
    count.innerText = SelectSeatCount;
    amount.innerText = movie.value * SelectSeatCount;

    saveToLocalStorage(selectedSeatIndexs);
};

function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', movie.selectedIndex);
}