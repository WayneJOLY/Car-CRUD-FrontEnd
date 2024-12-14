let url="http://localhost:8080/api/v1/cars"

const btnAdd=document.querySelector("#main-btnAdd")
const controlForm=document.querySelector(".main-form-card")
const carForm=document.querySelector("#carform")
const carsConstainer= document.querySelector("#main-cars")
const carDelete=document.querySelector("#delete-btn")
const carUpdate=document.querySelector("#update-btn")
const imageContainer=document.querySelector(".image-wrapper")
btnAdd.addEventListener("click",()=>{
    controlForm.classList.toggle("hide")
})

carDelete.addEventListener("click",()=>{
    console.log("Hice click en delete ")
})

document.addEventListener("DOMContentLoaded",()=>{
    fechDatos()
})

const fechDatos=(async()=>{
    try{
        const response= await axios.get("http://localhost:8080/api/v1/cars")
        const cars=response.data
       
        cars.forEach(car => {
            console.log(car)
            const mainDiv= document.createElement('div')
                  mainDiv.classList.add("card")

            const cardImageContainer=document.createElement("div")
                    cardImageContainer.classList.add("image-wrapper")
            const cardImageContainerImage=document.createElement("img")
                  cardImageContainerImage.src=car.image
                  cardImageContainerImage.alt=`${car.brand} - ${car.model}`
                  cardImageContainer.appendChild(cardImageContainerImage)
            
            const cardTitle=document.createElement("div")
                    cardTitle.classList.add("title")
                const cardTitleSpan=document.createElement("span")
                         cardTitleSpan.innerHTML=`${car.brand} - ${car.model}`

                         cardTitle.appendChild(cardTitleSpan)

            const cardRow=document.createElement("div")
                    cardRow.classList.add("row")

            const item1=document.createElement("div")
                    item1.classList.add("item")
                    
                const itemSpanfirs1=document.createElement("span")
                        itemSpanfirs1.classList.add("bold-txt")
                        itemSpanfirs1.innerText="Color"
                        
                const itemSpan1=document.createElement("span")
                        itemSpan1.classList.add("reg-txt")
                        itemSpan1.innerHTML=car.color
                        item1.appendChild(itemSpanfirs1)
                        item1.appendChild(itemSpan1)

            const item2=document.createElement("div")
                    item2.classList.add("item")

                    const itemSpanfirs2=document.createElement("span")
                        itemSpanfirs2.classList.add("bold-txt")
                        itemSpanfirs2.innerText="Year"
                    
                const itemSpan2=document.createElement("span")
                        itemSpan2.classList.add("reg-txt")
                        itemSpan2.innerHTML=car.year
                        item2.appendChild(itemSpanfirs2)
                        item2.appendChild(itemSpan2)
                 

            const item3=document.createElement("div")
                    item3.classList.add("item")
                    
                const itemSpanfirs3=document.createElement("span")
                    itemSpanfirs3.classList.add("bold-txt")
                    itemSpanfirs3.innerText="price"         
                        
            const itemSpan3=document.createElement("span")
                        itemSpan3.classList.add("reg-txt")
                        itemSpan3.innerHTML=car.price
                    item3.appendChild(itemSpanfirs3)
                    item3.appendChild(itemSpan3)

                    cardRow.appendChild(item1)
                    cardRow.appendChild(item2)
                    cardRow.appendChild(item3)


                    mainDiv.appendChild(cardImageContainer)
                    mainDiv.appendChild(cardTitle)
                    mainDiv.appendChild(cardRow)

                    carsConstainer.appendChild(mainDiv)
   //        carsConstainer.innerHTML+=`
   //<div class="card">
   //    <div class="image-wrapper">
   //      <img src=${car.image} alt=""> 
   //    </div>
   //    <div class="title">
   //      <span>${car.brand} - ${car.model}</span>
   //    </div>
   //    <div class="row">
   //        <div class="item">
   //          <span class="bold-txt">Color</span>
   //          <span class="reg-txt">${car.color}</span>
   //        </div>
   //        <div class="item">
   //          <span class="bold-txt">Year</span>
   //          <span class="reg-txt">${car.year}</span>
   //        </div>
   //        <div class="item">
   //          <span class="bold-txt">Price</span>
   //          <span class="reg-txt">${car.price}</span>
   //        </div>
   //    </div>
   //    <div class="price-btn">
   //        <button class="update-btn" id="update-btn">
   //            <i class="fa-solid fa-pen-to-square"></i>
   //            <span>Edit</span> 
   //          </button>
   //      <button class="delete-btn" id="delete-btn">
   //        <i class="fa-solid fa-trash"></i>
   //        <span>Delete</span>
   //      </button>
   //    </div>
   //  </div>`
        });
    }catch(error)
    {
        console.log(error)
    }
})


carForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const car={
        brand:document.querySelector("#brand").value,
        model:document.querySelector("#model").value,
        color:document.querySelector("#color").value,
        year:document.querySelector("#year").value,
        price:document.querySelector("#price").value,
        image:document.querySelector("#imgurl").value,
    }

    try{
        console.log(car.imgUrl)
        axios.post(url,car)
        fechDatos()
    }catch(error){
        console.log(error)
    }

    controlForm.classList.add("hide")
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


const deleteCar =async(id)=>{
    try{
        await axios.delete(`http://localhost:8080/api/v1/cars/:${id}`)
    }catch(error){
        console.log(error)
    }
}

