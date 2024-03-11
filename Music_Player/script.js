let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");
let timeRemaining = document.getElementById("timeRemaining");
let songImg = document.getElementById("songImg");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");

const songInfo = [
    { id: "song1", title: "Riverside ", artist: "Slo Loris", imgSrc: "media/2786278ec6be8a8a4eada72796a355f8.jpg" },
    { id: "song2", title: "Midas", artist: "LESKY x Waywell", imgSrc: "media/7ab1de6f613d211bbf2fc4e59142af98.jpg" },
    {id: "song3", title: "Speeder", artist: "Chau Sara", imgSrc: "media/e980d3422d63e0997d6ed26d246eb31f.jpg" },
];

const songIds = songInfo.map(info => info.id);
let currentSongIndex = 0;

const songs = songIds.map(id => document.getElementById(id));

function updateSongInfo() {
    let currentSong = songInfo[currentSongIndex];
    songTitle.textContent = currentSong.title;
    songArtist.textContent = currentSong.artist;
    songImg.src = currentSong.imgSrc;
}

function playPause() {
    if (songs[currentSongIndex].paused) {
        playMusic();
    } else {
        pauseMusic();
    }
}

function playMusic() {
    songs[currentSongIndex].play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    updateSongInfo();
}

function pauseMusic() {
    songs[currentSongIndex].pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}

function forward() {
    pauseMusic();
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playMusic();
}

function backward() {
    pauseMusic();
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playMusic();
}

setInterval(() => {
    if (!songs[currentSongIndex].paused) {
        progress.value = songs[currentSongIndex].currentTime;
        updateTimer();
    }
}, 500);

progress.onchange = function() {
    songs[currentSongIndex].currentTime = progress.value;
    updateTimer();
};

songs[currentSongIndex].addEventListener("loadedmetadata", () => {
    progress.max = songs[currentSongIndex].duration;
    updateTimer();
    updateSongInfo();
});

function updateTimer() {
    let remaining = songs[currentSongIndex].duration - songs[currentSongIndex].currentTime;
    let minutes = Math.floor(remaining / 60);
    let seconds = Math.floor(remaining % 60);
    timeRemaining.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
