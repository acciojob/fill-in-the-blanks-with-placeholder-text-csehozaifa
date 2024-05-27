//your code here// your code here in JavaScript

// Function to display an alert when the paragraph is clicked
function showAlert() {
    alert("You clicked the Accio Ipsum text!");
}

// Add event listener to the paragraph element
document.addEventListener('DOMContentLoaded', (event) => {
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.addEventListener('click', showAlert);
    }
});

