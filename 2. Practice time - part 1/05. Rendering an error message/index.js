// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

errorEl = document.getElementById("error")
let msg = "Something went wrong, please try again"

function errorMsg(){
    errorEl.innerText = msg

}


