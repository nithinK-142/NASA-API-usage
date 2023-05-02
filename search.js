function clearInput() {
    document.getElementById("planet-input").value = "";
    document.getElementById("planet-image").innerHTML = "";
}

function searchPlanet(event) {
    event.preventDefault();
    const planetInput = document.getElementById("planet-input").value;
    const url = `https://images-api.nasa.gov/search?q=${planetInput}&media_type=image`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const planetImageDiv = document.getElementById("planet-image");
            planetImageDiv.innerHTML = "";

            if (data.collection.items.length > 0) {
                const img = document.createElement("img");
                img.src = data.collection.items[0].links[0].href;
                img.alt = planetInput;
                planetImageDiv.appendChild(img);
            } else {
                planetImageDiv.innerHTML = "<p>No image found for this planet</p>";
            }
        })
        .catch((error) => console.log(error));
}