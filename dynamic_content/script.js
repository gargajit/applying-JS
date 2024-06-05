function create_new_element(message) {
    // Step 1: Create the 'div' element with the class 'left'
    let newDiv = document.createElement("div");
    newDiv.className ="left";

    // Step 2: Create the 'p' element
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = message;

    // Step 3: Append the 'p' element to the 'div'
    newDiv.appendChild(newParagraph);

    // Step 4: Append the 'div' to the body
    document.body.appendChild(newDiv);
}

document.getElementById("user-input-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the form from submitting the traditional way (which would be to reload the page)

    const userInput = document.getElementById("user-input").value;

    if (userInput.trim().toLowerCase() == "yes") {
        create_new_element(`Sure, here is the current Date and Time:<br><span>${new Date()}</span>`);
    } else if (userInput.trim().toLowerCase() == "no"){
        create_new_element("Have a nice day!")
    } else {
        create_new_element("Sorry, wrong input.")
    }
});