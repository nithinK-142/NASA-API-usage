var headers = ["Discover the Wonders of the Universe", "Explore the Planets with NASA Images", "Journey Through the Cosmos", "Explore Wonders of Space through NASA's Vast Gallery of Images", "Images from NASA Gallery"];
var header_index = 0;
var header_elem = $("#header");
setInterval(function() {
    header_elem.text(headers[header_index]);
    header_index = (header_index + 1) % headers.length;
}, 5000);

const dialog = document.getElementById('dialogBtn');
const about = document.getElementById('about');
const btn = document.getElementById('btn');

dialog.addEventListener('click', function () {
    document.body.style.filter = "blur(5px)";
    about.showModal();

    // setTimeout(function () {
    //     document.body.style.filter = "none";
    //     about.close();
    // }, 5000); 
});

document.addEventListener('click', function (event) {
    if (event.target === btn || (event.target !== dialog && !dialog.contains(event.target))) {
        document.body.style.filter = "none";
        about.close();
    }
});


