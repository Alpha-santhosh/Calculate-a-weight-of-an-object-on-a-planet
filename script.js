const planets =[
        { planetName: "Moon", gravity: 0.1655, image: "https://nineplanets.org/wp-content/uploads/2020/03/moon.png" },
        { planetName: "Mercury", gravity: 0.377, image: "https://nineplanets.org/wp-content/uploads/2020/03/mercury.png" },
        { planetName: "Venus", gravity: 0.9032, image: "https://nineplanets.org/wp-content/uploads/2020/03/venus.png" },
        { planetName: "Earth", gravity: 1, image: "https://nineplanets.org/wp-content/uploads/2020/03/earth.png" },
        { planetName: "Mars", gravity: 0.3895, image: "https://nineplanets.org/wp-content/uploads/2020/03/mars.png" },
        { planetName: "Jupiter", gravity: 2.640, image: "https://nineplanets.org/wp-content/uploads/2020/03/jupiter.png" },
        { planetName: "Saturn", gravity: 1.139, image: "https://nineplanets.org/wp-content/uploads/2020/03/saturn.png" },
        { planetName: "Uranus", gravity: 0.917, image: "https://nineplanets.org/wp-content/uploads/2020/03/uranus.png" },
        { planetName: "Neptune", gravity: 1.148, image: "https://nineplanets.org/wp-content/uploads/2020/03/neptune.png" },
        { planetName: "Pluto", gravity: 0.62, image: "https://nineplanets.org/wp-content/uploads/2020/03/pluto.png" },
]

// for(var i=0;i<planets.length;i++){
//     var option = document.createElement("option")
//     option.innerText = planets[i].planetName
//     option.value = planets[i].gravity
//     option.setAttribute("images",planets[i].image)
//     select.appendChild(option)
//     console.log(option)
// }

planets.map((e=>{
    var option = document.createElement("option")
    option.innerText = e.planetName
    option.value = e.gravity
    option.setAttribute("images",e.image)
    select.appendChild(option)
    // console.log(option)
}))

function cal() {
    const select = document.getElementById("select")
    var selectedIndex = select.selectedIndex
    // console.log(selectedIndex)
    const selectedoption = select.options[selectedIndex]
    // console.log(selectedoption);
    

    const mass = document.getElementById("mass").value
    console.log(mass)
    var gravityofplanet = selectedoption.value
    console.log(gravityofplanet)
    var weight = Math.abs(mass * gravityofplanet)
    console.log(weight);
    var content = document.getElementById("content")
    if(mass == ""){
        console.log("Mass is requied")
        
        content.innerHTML=""
        var error = document.createElement("div")
        error.innerText ="Mass is requied"
        error.classList.add("error")
        content.appendChild(error)
        cal()
    }else{
        content.innerHTML=""
        var imge = document.createElement("img")
        // const img = document.getElementById("img")
        var imagesrc = selectedoption.getAttribute("images")
        console.log((imagesrc));
        imge.src = imagesrc
        content.appendChild(imge)
        var card = document.createElement("card")
        card.classList.add("card")
        card.innerText =`The Weight of the Object on ${selectedoption.innerText}`
        var cir = document.createElement("div")
        cir.innerText = `${weight.toFixed(2)} N`
        cir.classList.add("cir")
        card.appendChild(cir)
        content.appendChild(card)
    }
}