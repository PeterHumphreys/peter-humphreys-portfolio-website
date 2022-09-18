const modalTriggers = document.querySelectorAll("#my-work .modal-trigger");
const closeButtons = document.querySelectorAll(".modal .btn-close-modal");

//Add Event listeners to open each modal
modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
        const modalID = trigger.dataset.target;
        const modal = document.querySelector(modalID);
        modal.classList.add("modal-active");
        document.body.classList.toggle("scroll-disabled");
    })
});

//Add Event listeners to close each modal
closeButtons.forEach(button => {
    button.addEventListener("click", () => 
    {
        //Remove modal-active class from modal
        let modal = button.closest(".modal-active")
        modal.classList.remove("modal-active");
        //Remove scroll-disabled class from body
        document.body.classList.remove("scroll-disabled");
        //Reset the carousel image positions
        resetCarousel(modal.querySelector(".carousel-content"));
    })
})