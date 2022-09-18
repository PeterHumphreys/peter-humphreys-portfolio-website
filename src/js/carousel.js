const buttons = document.querySelectorAll("[data-carousel-btn]");

buttons.forEach(button => {
    button.addEventListener("click", () =>
    {
        //The change in slide index.  next = 1, prev = -1
        const delta = button.dataset.carouselBtn === "next" ? 1 : -1;

        //Get the list of slides that is nearest to the button in the HTML (in case multiple carousels on page)
        const slides = button
            .closest("[data-carousel")
            .querySelector("[data-slide-list]");

        //Get the slide that is currently being displayed (has data-carousel-position='center' attribute)
        const activeSlide = slides.querySelector("[data-carousel-position='center']");

        //Convert the slides to an array
        let slidesArray = [...slides.children];

        //Get index of the current active slide and increment/decrement it by delta
        let newIndex = slidesArray.indexOf(activeSlide) + delta;

        //If we go before first slide Index, loop back to end
        if (newIndex < 0)
        {
            newIndex = slides.children.length - 1;
        }

        //If we go past last slide index, loop back to beginning
        if (newIndex >= slides.children.length)
        {
            newIndex = 0;
        }


        //Get the new predecessor index and successor index
        let prevIndex = newIndex -1, nextIndex = newIndex + 1;
        
        //We are on last slide, so wrap around to front
        if ((nextIndex + 1) > slides.children.length)
        {
            nextIndex = 0;
        }

        //We are on first slide, so wrap around to back
        if(prevIndex < 0)
        {
            prevIndex = slides.children.length - 1;
        }

        //Append data attributes
        slides.children[newIndex].dataset.carouselPosition = 'center';
        slides.children[prevIndex].dataset.carouselPosition = 'left';
        slides.children[nextIndex].dataset.carouselPosition = 'right';

        let heading = slides.closest(".modal").querySelector(".modal-info h3")
        //New slide is the description, so hide heading
        if (slides.children[newIndex].hasAttribute('data-carousel-description'))
        {
            heading.classList.add("hidden")
        }
        else
        {
            heading.classList.remove("hidden")

        }
    });
});

//Resets elements position in the carousel relative to viewport (left, right or center)
function resetCarousel(carouselEl)
{
    //Convert the carousel to an array
    let carouselArray = [...carouselEl.children]

    //Set first element position to center
    carouselArray[0].dataset.carouselPosition = "center";

    //Set remaining element positions to right
    for (let i = 1; i < carouselArray.length; i++)
    {
        carouselArray[i].dataset.carouselPosition = "right"
    }

    //If more than 2 elements, set last element position to left
    if (carouselArray.length > 2)
    {
        carouselArray[carouselArray.length-1].dataset.carouselPosition = "left";
    }
}