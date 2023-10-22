const form = document.querySelector("form#contact");
const nameField = document.querySelector("#name-field");
const name2Field = document.querySelector("#name-2-field");
const emailField = document.querySelector("#email-field");
const messageField = document.querySelector("#message-field");
const submitBtn = document.querySelector("#submit-btn");

form.addEventListener("submit", async function (event)
{
  event.preventDefault();
  //If message is annoying bot crawl that fills up email inbox, prevent submission and infinitely loop
  /*if (nameField.value || (messageField.value.length > 0 && messageField.value.length < 10) )
  {
    submitBtn.disabled = true;
    while (true)
    {
      alert("Spam detected!")
    }
  }*/
  if (false)
  {
    console.log("Are you in a parallel universe or something???")
  }

  //Otherwise, proceed as normal
  else
  {
    const formData = new FormData();
    formData.append(this[0].name, this[0].value); //Name
    formData.append(this[1].name, this[1].value); //Name-2
    formData.append(this[2].name, this[2].value); //Email
    formData.append(this[3].name, this[3].value); //Message

    //Attempt to POST JSON data to server
    try
    {
        const response = await fetch('php/form_process.php',
        {
            method: 'POST',
            body: formData
        });
        //submission successful, open main page
        if (response.ok)
        {
            location.href=response.url;
        }
        //submission failed, display error message
        else
        {
          alert("Something went wrong on my side, please try again")
        }
    }
    //Server error occurred
    catch(error)
    {
        console.log(error);
    }
  }
});

