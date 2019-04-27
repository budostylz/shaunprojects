/*
    Display's map via user's position
    Contributor: Shaun Lewis
    4/17/2016

*/
(function () {
    jQuery.noConflict();//let native libraries use global object
    var iframe = jQuery("#position iframe");
    //default view
    iframe.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyDlq7vkWkeVr5UfnvKdSAqhDU3MppO-Y84&center=37.0362625,-76.4736602&zoom=18&maptype=satellite");
    getUserLocation();
    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getUserPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }//getUserLocation()
    function getUserPosition(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        iframe.attr("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyDlq7vkWkeVr5UfnvKdSAqhDU3MppO-Y84&center="+lat+","+long+"&zoom=18&maptype=satellite");
    } //getUserPosition(pos)
})();