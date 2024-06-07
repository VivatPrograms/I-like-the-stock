document.addEventListener('DOMContentLoaded', function() {
    const powerButton = document.getElementById('powerButton');
    const video = document.getElementById('video');

    powerButton.addEventListener('click', function() {
        powerButton.style.display = 'none'; // Hide the button
        video.style.display = 'block'; // Show the video
        video.play(); // Play the video

        video.onended = function() {
            video.style.display = 'none'; // Hide the video after playback
            powerButton.style.display = 'block'; // Show the button again
        };
    });
});
