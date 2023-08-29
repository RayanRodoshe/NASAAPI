const mainForm = document.getElementsByClassName("mainForm")[0]
let fContainer = document.getElementsByClassName("fContainer")[0]
let lContainer = document.getElementsByClassName("lContainer")[0]
const dateInput = document.getElementsByClassName("dateInput")[0]
const apiKey = "gN92vyfevLrDc40giLmdG4cQwghp0HQaa6UnrBdw"
let count = 0
if(localStorage.length > 0){
    count = Number(localStorage.getItem("count"))
    for(let i =0; i <localStorage.length; i++){
console.log(localStorage.key(i))
        if(localStorage.key(i) === "count"){
            continue
        }
        let dltOutputDiv3 = document.createElement("div")
     
        dltOutputDiv3.setAttribute("class","dltOutput")
        console.log(localStorage.getItem(localStorage.key(i)))
        dltOutputDiv3.innerHTML = (localStorage.getItem(localStorage.key(i)))
        lContainer.append(dltOutputDiv3)
        let dltButton4 = document.getElementsByClassName("dlt")

        Array.from(dltButton4).forEach(val=>{
            val.addEventListener("click", ()=>{
                localStorage.removeItem(val.getAttribute("name"))
               val.parentElement.remove()
             
            })
        })
    }
    }
mainForm.addEventListener("submit", (e)=>{
e.preventDefault()
if(dateInput.value === "") {
    alert("Invalid Input")
}
else{
fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput.value}`)
.then((res)=>res.json())
.then((data)=>{
    addToFContainer(data.title,  data.date, data.explanation, data.media_type, data.url)

    if(data.media_type === "image"){
        let favButton1 = document.getElementsByClassName("fav")[0]
        favButton1.addEventListener("click", ()=>{
            let img2 = document.createElement("img")
            img2.setAttribute("id","ingg2")
            img2.setAttribute("src",data.url)
            let dltOutputDiv = document.createElement("div")
        dltOutputDiv.setAttribute("class","dltOutput")
        let h2dlt = document.createElement("h2")
        h2dlt.textContent = data.title
        let h3dlt = document.createElement("h3")
        h3dlt.textContent = data.date
        let pdlt = document.createElement("p")
        pdlt.textContent = data.explanation
        count++
        let dltButton1 = document.createElement("button")
        dltButton1.textContent = "Delete"
        dltButton1.setAttribute("class","dlt")
        dltButton1.setAttribute("name", `item${count}`)
        dltOutputDiv.append(img2, h2dlt, h3dlt, pdlt, dltButton1)
        lContainer.innerHTML += (dltOutputDiv.innerHTML)
        lContainer.style.border = "2px solid black"
        localStorage.setItem(`item${count}`, dltOutputDiv.innerHTML)
 

        localStorage.setItem("count", JSON.stringify(count))
        let dltButton3 = document.getElementsByClassName("dlt")
        Array.from(dltButton3).forEach(val=>{
            val.setAttribute("name", `item${count}`)
            val.addEventListener("click", (e)=>{
                localStorage.removeItem(val.getAttribute("name"))
               val.parentElement.remove()
            })
        })
        })

    }else if(data.media_type=== "video"){
        favButton2.addEventListener("click", ()=>{
            let video2 = document.createElement("img")
            video2.setAttribute("id","ingg2")
            video2.setAttribute("src",data.url)
            let dltOutputDiv = document.createElement("div")
        dltOutputDiv.setAttribute("class","dltOutput")
        let h2dlt = document.createElement("h2")
        h2dlt.textContent = data.title
        let h3dlt = document.createElement("h3")
        h3dlt.textContent = data.date
        let pdlt = document.createElement("p")
        pdlt.textContent = data.explanation
        count++
        let dltButton2 = document.createElement("button")
        dltButton2.setAttribute("name", `item${count}`)
        dltButton2.textContent = "Delete"
        dltButton2.setAttribute("class","dlt")
    dltOutputDiv.append(video2, h2dlt, h3dlt, pdlt, dltButton2)
    lContainer.innerHTML += (dltOutputDiv.innerHTML)
    lContainer.style.border = "2px solid black"

    localStorage.setItem(`item${count}`, dltOutputDiv.innerHTML)

    localStorage.setItem("count", JSON.stringify(count))
    let dltButton3 = document.getElementsByClassName("dlt")
    Array.from(dltButton3).forEach(val=>{
        val.setAttribute("name", `item${count}`)
        val.addEventListener("click", (e)=>{
            localStorage.removeItem(val.getAttribute("name"))
           val.parentElement.remove()
        })
    })
        })
    } 
}
)
}
})

function addToFContainer(title, date, text, mediatype, url){
    if(mediatype === "image"){
        let img1 = document.createElement("img")
        img1.setAttribute("id","ingg1")
        img1.setAttribute("src",url)
        let getOutputDiv = document.createElement("div")
        getOutputDiv.setAttribute("class","getOutput")
        let h2 = document.createElement("h2")
        h2.textContent = title
        let h3 = document.createElement("h3")
        h3.textContent = date
        let p = document.createElement("p")
        p.textContent = text
        let favButton1 = document.createElement("button")
        favButton1.textContent = "Save to Favourite"
        favButton1.setAttribute("class","fav")


    getOutputDiv.append(img1, h2, h3, p, favButton1)
    fContainer.innerHTML = (getOutputDiv.innerHTML)
    fContainer.style.border = "2px solid black"
    fContainer.style.height = "800" +"px"
   
    }

    else if(mediatype === "video"){
        let video1 = document.createElement("IFRAME")
        video1 .setAttribute("id", "ingg1")
        video1.setAttribute("src", url)
        let getOutputDiv = document.createElement("div")
        getOutputDiv.setAttribute("class","getOutput")
        let h2 = document.createElement("h2")
        h2.textContent = title
        let h3 = document.createElement("h3")
        h3.textContent = date
        let p = document.createElement("p")
        p.textContent = text
        let favButton2 = document.createElement("button")
        favButton2.textContent = "Add to Favourite"
        favButton2.setAttribute("class","fav") 

    getOutputDiv.append(video1, h2, h3, p, favButton2)
    fContainer.innerHTML = (getOutputDiv.innerHTML)
    fContainer.style.border = "2px solid black"
    fContainer.style.height = "800" +"px"

    }
}