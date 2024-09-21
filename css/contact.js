function scaleDivsOnPC() {
    // Check if the screen width is greater than or equal to 1024px (PC size)
    if (window.innerWidth >= 1024) {
        // Select the divs by their IDs
        var profile1 = document.getElementById('profile1');
        var profile2 = document.getElementById('profile2');

        // Apply 3% scaling to both divs
        profile1.style.transform = 'scale(1.6)';
        profile1.style.transformOrigin = 'top left'; // Keep the original alignment
        
        profile2.style.transform = 'scale(1.6)';
        profile2.style.transformOrigin = 'top left'; // Keep the original alignment
    }
}

// Call the function on page load
window.onload = scaleDivsOnPC;

// Optionally, call the function on window resize to handle dynamic resizing
window.onresize = scaleDivsOnPC;