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

// Set initial slider value
let slider = document.getElementById("volumeSlider");
if (slider) { slider.value = 0.1; }

// Volume control function
let setVolume = (value) => {
    audioElements.forEach(audio => { audio.volume = value/2; });
}

// Set initial volume
setVolume(slider.value);

// Function to display current track information
let displayCurrentTrackInfo = (index) => {
    const trackInfo = [
        { title: "Aquarium's Afternoon", artist: "Heartbeat in the brain" },
        { title: "distant ocean", artist: "alyzea" },
        { title: "last day to live (make it count)", artist: "dreamcorp." },
        { title: "New Look (Wii U Wii Maker Lofi Mix)", artist: "Lofi Beats To Chill Study Sleep" },
        { title: "overpopulation at the end of everything is less of a worry, haha ('a letter to you' from mother 3)", artist: "dreamcorp." },
        { title: "unseen", artist: "Squeak" },
        { title: "your life flashing before your eyes", artist: "dreamcorp." }
    ];
    const info = trackInfo[index];
    document.getElementById("currentTitle").textContent = info.title;
    document.getElementById("currentArtist").textContent = info.artist;
};

// Function to play a specific track by index
let playTrack = (index) => {
    audioElements.forEach(audio => { audio.pause(); audio.currentTime = 0; });
    currentAudioIndex = index;
    audioElements[currentAudioIndex].play().catch(e => console.log("Click page to play"));
    displayCurrentTrackInfo(currentAudioIndex);
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
