const image = document.getElementById("myDpd");
const modal = document.getElementById("dpdModal");

image.addEventListener("click", () => {
    modal.style.display = "block"; 
});


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


//Remaining the cancel for modal, footer, and responsiveness test.