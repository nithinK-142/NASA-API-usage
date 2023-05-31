var headers = ["Discover the Wonders of the Universe", "Explore the Planets with NASA Images", "Journey Through the Cosmos", "Explore Wonders of Space through NASA's Vast Gallery of Images", "Images from NASA Gallery"];
var header_index = 0;
var header_elem = $("#header");
setInterval(function() {
    header_elem.text(headers[header_index]);
    header_index = (header_index + 1) % headers.length;
}, 5000);

