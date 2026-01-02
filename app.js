// Example of refactored JavaScript functionality extracted from index.html

// Event listener for button click (example)
const button = document.getElementById('myButton');
button?.addEventListener('click', () => {
    console.log('Button clicked!');
    // Add your functionality here
});

// Function to initialize the application
function initializeApp() {
    console.log('Application initialized.');
    // Additional initialization code here
}

// Call initializeApp when the window loads
window.addEventListener('load', initializeApp);