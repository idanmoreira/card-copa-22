let isFrontend = true

function changeCard(event){
    const card = event.currentTarget
    const bg = isFrontend ? "frontend" : "fullstack"  
    isFrontend = !isFrontend
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg`

}