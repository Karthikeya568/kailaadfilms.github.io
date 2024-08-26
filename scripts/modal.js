document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('video-modal');
    var btn = document.getElementById('watch-now-btn');
    var span = document.getElementsByClassName('close')[0];
    var video = document.getElementById('showreel-video');

    btn.onclick = function() {
        modal.style.display = 'block';
        video.play();
    }

    span.onclick = function() {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            video.pause();
            video.currentTime = 0;
        }
    }
});