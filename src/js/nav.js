const nav = document.querySelector("nav"); //nav
const navBarFacade = document.querySelector(".navbar-facade")
const toggleBtn = document.querySelector(".menu-toggle"); //toggle button
const toggleIcon = document.querySelector(".menu-toggle i"); //toggle icon
const MEDIA_LARGE = 992;


//Open the nav when toggle button is clicked
toggleBtn.addEventListener("click", () =>
{
    document.body.classList.toggle("scroll-disabled");
    nav.classList.toggle("active");
    toggleIcon.classList.toggle("fa-bars");
    toggleIcon.classList.toggle("fa-times");
})

window.addEventListener("resize", () => 
{
    handleScroll();
    //If mobile nav is open, reset
    if (window.innerWidth > MEDIA_LARGE)
    {
        //let user scroll
        document.body.classList.remove("scroll-disabled");
        //close mobile nav
        nav.classList.remove("active");
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
    }
})
window.addEventListener("scroll", handleScroll)
window.addEventListener("load", handleScroll);

//Changes the navbar color based on location in the page
function handleScroll()
{
    //If screen is large, set navBar to the actual nav
    if (window.innerWidth > MEDIA_LARGE)
    {
        navBar = nav;
    }
    //Else set it to the facade
    else
    {
        navBar = navBarFacade;
    }
    //Add nav-scrolled class if beyond y = 50
    if (window.scrollY > 50)
    {
        navBar.classList.add("nav-scrolled");
    }
    //Otherwise, remove it
    else
    {
        navBar.classList.remove("nav-scrolled");
    }

}
