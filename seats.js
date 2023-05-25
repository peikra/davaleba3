
const seats = [
    {
      id: 1,
      price: 10,
    },
    {
      id: 2,
      price: 10,
    },
    {
      id: 3,
      price: 10,
    },
    {
      id: 4,
      price: 10,
    },
    {
      id: 5,
      price: 10,
    },
    {
      id: 6,
      price: 10,
    },
    {
      id: 7,
      price: 10,
    },
    {
      id: 8,
      price: 10,
    },
    {
      id: 9,
      price: 10,
    },
  ];

  const place = document.getElementById("seats")

  seats.forEach(seat => {
    const seatel = document.createElement("div")
    seatel.classList.add("col-4")
      seatel.innerHTML=
         `
         <div class="seats">
            <p class ="text-white">Place : ${seat.id} </p>
            <p class ="text-white">Price : ${seat.price} </p>



         </div>
    
    
    
    
        `
      place.appendChild(seatel)
      seatel.addEventListener("click", () =>{
        localStorage.setItem("seats", JSON.stringify(seat))
      })

  })