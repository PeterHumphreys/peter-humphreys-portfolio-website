const projects = document.querySelectorAll("#my-work .gallery-item");
const filterButtons = document.querySelectorAll(".filter-list button.filter");

//Array of item order classes for CSS grid placement
const itemClasses = ["item-a, item-b, item-c, item-d, item-e, item-f, item-g, item-h, item-i, item-j, item-k, item-l, item-m, item-n"]

filterButtons.forEach(button => {
    button.addEventListener("click", (event) => 
    {
        //Loop through all buttons and remove active class
        filterButtons.forEach(button => 
            {
                button.classList.remove("active");
            })
        //Add active class to current button
        button.classList.add("active");
        //Loop through projects and remove active class from each
        projects.forEach(project => {
            //Remove active class
            project.classList.remove("active")
            project.classList.add("inactive")
            
            //Get classList as a string
            const classListString = project.className;
            //Check for presence of item-X class
            if (classListString.includes("item-"))
            {
                //Get index of X
                let loc = classListString.indexOf("item-") + 5;

                //Get the actual name of the item-X class
                let classToRemove = ("item-" + classListString[loc]);

                //Remove item-X class from classList
                project.classList.remove(classToRemove)
            }
        });

        //Get the filter
        let filter = button.dataset.target;

        //Get current character for "item-X" classes
        let currChar = 'a';
        //loop through projects and get ones with corresponding filter
        projects.forEach(project => {
            if(project.classList.contains(filter))
            {
                project.classList.remove("inactive")
                project.classList.add("active")
                project.classList.add("item-" + currChar);
                currChar = String.fromCharCode(currChar.charCodeAt() + 1)
            }
            else{
                project.classList.add("inactive")
            }
        });
    });
});




