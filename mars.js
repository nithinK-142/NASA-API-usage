$(document).ready(function() {
    var api_key = "";
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=" + api_key;

    $.getJSON(url, function(data) {
            var images_div = $("#images");
            var count = 0;
            $.each(data.photos, function(index, element) {
                if (count >= 12) {
                    return false; // break out of the loop
                }
                images_div.append("<img src='" + element.img_src + "' alt='Mars photo'>");
                count++;
            });
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Request Failed: " + err);
        });
});