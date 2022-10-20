let mySkillsEl = document.querySelector("#my-skills")
let aboutMeEl = document.querySelector("#about-me");
let myWorkEl = document.querySelector("#my-work");
let contactMeEl = document.querySelector("#contact-me");
let footerEl = document.querySelector(".footer-content");

//Check if the specified percentage of an element is in the viewport
function percentageInViewPort(element, percentage) {
    const rect = element.getBoundingClientRect();
    let point = rect.top + (percentage * rect.height);
    return (point >= 0 &&point <= (window.innerHeight || document.documentElement.clientHeight ));
}

function animateAboutMe()
{
    if (percentageInViewPort(aboutMeEl, .5) && !aboutMeEl.classList.contains("animate"))
    {
        aboutMeEl.classList.add("animate");
    }
}

function animateMySkills()
{
    if (percentageInViewPort(mySkillsEl, .5) && (!mySkillsEl.classList.contains("animate")))
    {
            mySkillsEl.classList.add("animate");
            //Wait for fly in animation to finish executing, then add class for left animation
            setTimeout(()=> 
            {
                const skillsItemEls = document.querySelectorAll(".left .skills-item");
                skillsItemEls.forEach(el => 
                    {
                        el.classList.add("animate")
                    })
            }, 500);
            //Wait for left animation to finish executing, then add class for right animation
            setTimeout(()=> 
            {
                const skillsItemEls = document.querySelectorAll(".right .skills-item");
                skillsItemEls.forEach(el => 
                    {
                        el.classList.add("animate")
                    })
            }, 1500);
    }
}

function animateMyWork()
{
    if (percentageInViewPort(myWorkEl, .15) && !myWorkEl.classList.contains("animate"))
    {
        myWorkEl.classList.add("animate");
    }
}

function animateContactMe()
{
    if (percentageInViewPort(contactMeEl, .5) && !contactMeEl.classList.contains("animate"))
    {
        contactMeEl.classList.add("animate");
    }
    
}

function animateFooter()
{
    if (percentageInViewPort(footerEl, .5) && !footerEl.classList.contains("animate"))
    {
        footerEl.classList.add("animate");
    }
    
}


window.addEventListener("load", () => 
{
    //isInViewport(document.querySelector("#hero"))
    animateAboutMe();
    animateMySkills();
    animateMyWork();
    animateContactMe();
    animateFooter();
})

window.addEventListener("scroll", () => 
{
    animateAboutMe();
    animateMySkills();
    animateMyWork();
    animateContactMe();
    animateFooter();
});