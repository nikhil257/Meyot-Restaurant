let arr = [
    {
        image : "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image : "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMG9uJTIwcGxhdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
        image : "https://images.unsplash.com/photo-1530375930097-e957738bc0e6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMG9uJTIwcGxhdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
        image : "https://images.unsplash.com/photo-1523378315026-9fd34f51900d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image : "https://images.unsplash.com/photo-1623428187425-873f16e10554?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]

let clutter = "";

arr.forEach((item) =>{
    clutter += `<div class="images">
                    <img src="${item.image}" alt="">
                </div>`
})

const imageContainer = document.querySelector(".moreImages");

imageContainer.innerHTML = clutter;


