// Shows the credits section when the "Credits" button is clicked.
let showCreditz = () => {
    document.getElementById("creditz").classList.remove("hidden");
}

// Hides the credits section when the "Close" button is clicked.
let hideCreditz = () => {
    document.getElementById("creditz").classList.add("hidden");
}

// Shows the main content and hides the start page when the "Click to Enter" section is clicked.
let enterSite = () => {
    document.getElementById("pageStart").classList.add("hidden");
}

// Define audio elements and current index
let audioElements = document.querySelectorAll(".backgroundMusic");
let currentAudioIndex = 0; // This was missing or misplaced!

// Set initial volume for all audio elements
audioElements.forEach(audio => {
    audio.volume = 0.1;
});

// Set initial slider value
let slider = document.getElementById("volumeSlider");
if (slider) { slider.value = 0.2; }

// Volume control function
let setVolume = (value) => {
    audioElements.forEach(audio => { audio.volume = value/2; });
}

// Function to play a specific track by index
let playTrack = (index) => {
    audioElements.forEach(audio => { audio.pause(); audio.currentTime = 0; });
    currentAudioIndex = index;
    audioElements[currentAudioIndex].play().catch(e => console.log("Click page to play"));
};

// Function to play the next track in the list
let playNextTrack = () => {
    let nextIndex = (currentAudioIndex + 1) % audioElements.length;
    playTrack(nextIndex);
};

// Add event listeners to each audio element to play the next track when one ends
audioElements.forEach((audio) => {
    audio.addEventListener("ended", playNextTrack);
});

// Start playing a random track when the page is clicked for the first time
window.addEventListener('click', () => {
    // Now currentAudioIndex is definitely defined above!
    if (audioElements[currentAudioIndex].paused) {
        let randomIndex = Math.floor(Math.random() * audioElements.length);
        playTrack(randomIndex);
    }
}, { once: true });
