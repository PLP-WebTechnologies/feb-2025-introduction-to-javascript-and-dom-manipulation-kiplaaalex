// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = "Text successfully changed using JavaScript!";
        dynamicText.style.color = "#2ecc71"; // Adding some visual feedback
    });
    
    // Task 2: Modify CSS styles via JavaScript
    const styleDemo = document.getElementById('style-demo');
    
    styleDemo.addEventListener('click', function() {
        // Toggle between two different styles
        if (styleDemo.style.backgroundColor === 'lightblue') {
            styleDemo.style.backgroundColor = '#f39c12';
            styleDemo.style.color = 'white';
            styleDemo.style.borderRadius = '0';
            styleDemo.textContent = 'Style changed to orange theme!';
        } else {
            styleDemo.style.backgroundColor = 'lightblue';
            styleDemo.style.color = 'black';
            styleDemo.style.borderRadius = '20px';
            styleDemo.textContent = 'Style changed to blue theme!';
        }
    });
    
    // Task 3: Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const specialMessageContainer = document.getElementById('special-message-container');
    let messageVisible = false;
    let specialMessage = null;
    
    toggleElementBtn.addEventListener('click', function() {
        if (messageVisible) {
            // Remove the message
            specialMessageContainer.removeChild(specialMessage);
            messageVisible = false;
        } else {
            // Create and add the message
            specialMessage = document.createElement('div');
            specialMessage.className = 'special-message';
            specialMessage.innerHTML = '<h3>✨ Special Message ✨</h3><p>This element was dynamically added by JavaScript!</p>';
            specialMessageContainer.appendChild(specialMessage);
            messageVisible = true;
        }
    });
    
    // Bonus: Change heading color on mouseover
    const mainHeading = document.getElementById('main-heading');
    
    mainHeading.addEventListener('mouseover', function() {
        this.style.color = '#e74c3c';
    });
    
    mainHeading.addEventListener('mouseout', function() {
        this.style.color = ''; // Revert to original color
    });
});