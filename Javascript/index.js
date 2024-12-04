let url="http://localhost:8080/api/v1/cars"

const btnAdd=document.querySelector("#main-btnAdd")
const controlForm=document.querySelector(".main-form-card")
const carForm=document.querySelector("#carform")
const carsConstainer= document.querySelector("#main-cars")
btnAdd.addEventListener("click",()=>{
    controlForm.classList.remove("hide")
})

document.addEventListener("DOMContentLoaded",()=>{
    fechDatos()
})

const fechDatos=(async()=>{
    try{
        const response= await axios.get("http://localhost:8080/api/v1/cars")
        const cars=response.data
        console.log(response)
        cars.forEach(car => {
            console.log(car)
            carsConstainer.innerHTML+=`
            <div class="card">
        <div class="image-wrapper">
          <i class="far fa-image icon"></i>
        </div>
        <div class="title">
          <span>${car.brand}</span>
        </div>
        <div class="row">
            <div class="item">
              <span class="bold-txt">Color</span>
              <span class="reg-txt">${car.color}</span>
            </div>
            <div class="item">
              <span class="bold-txt">Year</span>
              <span class="reg-txt">${car.year}</span>
            </div>
            <div class="item">
              <span class="bold-txt">Price</span>
              <span class="reg-txt">${car.price}</span>
            </div>
        </div>
        <div class="price-btn">
            <button class="delete-btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <span>Edit</span>
              </button>
          <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
            <span>Delete</span>
          </button>
        </div>
      </div>`
        });
    }catch(error)
    {
        console.log(error)
    }
})

controlForm.classList.add("hide")
carForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const car={
        brand:document.querySelector("#brand").value,
        model:document.querySelector("#model").value,
        color:document.querySelector("#color").value,
        year:document.querySelector("#year").value,
        price:document.querySelector("#price").value,
        imgUrl:document.querySelector("#imgUrl").value,
    }

    try{
        axios.post(url,car)
        carForm.Reset()
        fechDatos()
    }catch(error){
        console.log(error)
    }
})

document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('input', function() {
        // Cambia el color de fondo si hay contenido
        if (this.value.trim() !== '') {
            this.style.backgroundColor = 'lightblue'; // Color de fondo cuando hay contenido
        } else {
            this.style.backgroundColor = ''; // Sin color si está vacío
        }
    });
});