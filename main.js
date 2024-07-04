var video = document.getElementById("myVideo");

function openFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}

function toggleForm() {
    var form = document.getElementById('myForm');
    var toggleButton = document.getElementById('toggleButton');

    if (form.style.display === 'none') {
        form.style.display = 'block';
        video.style.display = 'none';
        toggleButton.textContent = 'Back';
    } else {
        form.style.display = 'none';
        video.style.display = 'block';
        toggleButton.textContent = 'Next';
    }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var kids = document.getElementById('kids').value;
    var adults = document.getElementById('adults').value;

    // Pre-written message
    var message = `I am confirming my attendance to Chloe's birthday, We will be joining as ${adults} adults and ${kids} kids`;

    // WhatsApp number (replace with the desired number)
    var phoneNumber = '71758193';

    // WhatsApp URL
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp URL
    window.open(whatsappURL, '_blank');
});