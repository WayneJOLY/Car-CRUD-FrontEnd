let url="http://localhost:8080/api/v1/cars"

const btnAdd=document.querySelector("#main-btnAdd")
const controlForm=document.querySelector(".main-form-card")
const carForm=document.querySelector("#carform")
btnAdd.addEventListener("click",()=>{
    controlForm.classList.add("hide")
})

document.addEventListener("DOMContentLoaded",()=>{

    const fechDatos=()=>{
        try{
            const carsData=axios.get(``)
            const cars=carsData.data

            cars.forEach(car => {
                
            });
        }catch(error)
        {
            console.log(error)
        }
    }

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
})