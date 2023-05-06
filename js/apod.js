$(document).ready(function() {
    var api_key = "zgJdLdKXYObo6YFMAgHbfNbog3Edqdv5EJb3ncbx";
    var url = "https://api.nasa.gov/planetary/apod?count=9&api_key=" + api_key;
    console.log(url);

    $.getJSON(url, function(data) {
        var images_div = $("#images");
        $.each(data, function(index, element) {
            if (element.media_type == "image") {
                images_div.append("<img src='" + element.url + "' alt='" + element.title + "'>");
            }
        });
    });
});