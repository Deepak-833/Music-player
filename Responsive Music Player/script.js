const playPauseButton = document.getElementById('play-pause-button');
const progressBar = document.querySelector('.progress');

let isPlaying = false;
let progress = 0;
let progressInterval;

playPauseButton.addEventListener('click', function () {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

function playMusic() {
  isPlaying = true;
  playPauseButton.innerHTML = '<img src="pause-icon.png" alt="Pause">';
  progressInterval = setInterval(updateProgress, 100);
}

function pauseMusic() {
  isPlaying = false;
  playPauseButton.innerHTML = '<img src="play-icon.png" alt="Play">';
  clearInterval(progressInterval);
}

function updateProgress() {
  if (progress >= 100) {
    pauseMusic();
    progress = 0;
  } else {
    progress += 1;
    progressBar.style.width = `${progress}%`;
  }
}
