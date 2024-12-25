
document.addEventListener("DOMContentLoaded",()=>{
    const carForm=document.querySelector("#carformUpdate")
    const closeBtn=document.querySelector("#close-btn")
    const urlParams= new URLSearchParams(window.location.search)
    const idcar=urlParams.get("id")


        const getCar=async(idcar)=>{
            try{
                const cardata=await axios.get(`http://localhost:8080/api/v1/cars/${idcar}`)
            const car=cardata.data
                document.querySelector("#brand").value=car.brand
                document.querySelector("#model").value=car.model
                document.querySelector("#color").value=car.color
                document.querySelector("#year").value=car.year
                document.querySelector("#price").value=car.price
                document.querySelector("#imgurl").value=car.image
            }catch(error)
            {
                console.log(error)
            }
        
        }
    

    
    closeBtn.addEventListener("click",()=>{
        window.location.href=`../index.html`
    })


    carForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        const car={
            brand:document.querySelector("#brand").value,
            model:document.querySelector("#model").value,
            color:document.querySelector("#color").value,
            year:document.querySelector("#year").value,  
            price:document.querySelector("#price").value,
            image:document.querySelector("#imgurl").valu,
        }
        
        try{
            axios.put(`http://localhost:8080/api/v1/cars/${idcar}`,car)
            
        }catch{
            console.log(error)
        }
    
        controlForm.classList.add("hide")
        window.location.href=`../index.html`
    })
    getCar(idcar)
})






