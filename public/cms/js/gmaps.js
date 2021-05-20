
function nisgaaMap() {
    var school_address = "<?php $info['school_addr'] ?>";
    var mapProp= {
    center: new google.maps.LatLng(55.2044247,-129.0706727),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(55.2044247,-129.0706727),
        animation: google.maps.Animation.DROP
    });

    marker.setAnimation(google.maps.Animation.BOUNCE);

    infowindow = new google.maps.InfoWindow({
        content: "We're here!"
    });

    google.maps.event.addListener(marker, "click", function(){
        infowindow.open(map, marker);
    });

    infowindow.open(map, marker);
}
