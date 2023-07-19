
var play_btn = document.getElementById('play_btn');
var audioPlayer = document.getElementById('audioPlayer');
var isPlaying = false;

play_btn.addEventListener('click', function() {
  if (!isPlaying) {
    audioPlayer.play();
    play_btn.innerHTML = '<i class="bx bx-pause"></i>';
    isPlaying = true;
  } else {
    audioPlayer.pause();
    play_btn.innerHTML = '<i class="bx bx-play"></i>';
    isPlaying = false;
  }
});
