/* SHAPE */
// collect the element
let shape = document.querySelector(".shapeDiv")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")
let btncircle = document.querySelector(".btncircle")
let displayshape = document.querySelector(".shapeDiv p")

//add an event to each button
btnsquare.addEventListener("click", function () {
    shape.className = "square"
    displayshape.textContent = "square".toUpperCase()
})
btnrectangle.addEventListener("click", function () {
    shape.className = "rectangle"
    displayshape.textContent = "rectangle".toUpperCase()

})
btncircle.addEventListener("click", function () {
    shape.className = "circle"
    displayshape.textContent = "circle".toUpperCase()
})

/* DROPDOWN MENU */
//collect the element

let menubtn = document.querySelector(".menubtn");
let collapsemenu = document.querySelector(".collapsemenu");

// Add a click event to open the collapsible menu
menubtn.addEventListener("click", function () {
    collapsemenu.classList.toggle("closeToOpen");
});

/* modal window */
//collect the elememt
let card = document.querySelector(".card")
let modalwindow = document.querySelector(".modalwindow")
let closemodal = document.querySelector(".closemodal")

//add a click event to open the modal window
card.addEventListener("click", function () {
    modalwindow.style.display = "block"
})

// close the modal window ny clicking on X
closemodal.addEventListener("click", function () {
    modalwindow.style.display = "none"
})

// close the modal window when the user clicks anywhere 
window.addEventListener("click", function (event) {
    if (event.target == modalwindow) {
        modalwindow.style.display = "none"
    }
})