const form = document.querySelector("form#contact");
const nameField = document.querySelector("#name-field");
const emailField = document.querySelector("#email-field");
const messageField = document.querySelector("#message-field");
const submitBtn = document.querySelector("#submit-btn");

form.addEventListener("submit", (event)=>
{
  event.preventDefault();
  console.log("In submit")
  //If message is annoying bot crawl that fills up email inbox, prevent submission
  //and infinitely loop
  if (messageField.value.length > 0 && messageField.value.length < 10)
  {
    submitBtn.disabled = true;
    while (true)
    {
      alert("Begone now and forevermore.")
    }

  }
  //Otherwise, proceed as normal
  else
  {
    form.submit();
  }
});

