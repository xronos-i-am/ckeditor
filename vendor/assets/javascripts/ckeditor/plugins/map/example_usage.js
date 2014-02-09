$(function() {
  return $('#map').gmap();
});

$.fn.gmap = function() {
  return $(this).each(function() {
    var $el, addr, coords, infowindow, map, mapOptions, marker, myLatlng;
    $el = $(this);
    addr = $el.data('addr');
    coords = $el.data('coords');
    myLatlng = new google.maps.LatLng(coords[1], coords[0]);
    mapOptions = {
      zoom: $el.data('zoom'),
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId[$el.data('type')]
    };
    map = new google.maps.Map($el[0], mapOptions);
    infowindow = new google.maps.InfoWindow({
      content: addr
    });
    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: addr
    });
    return google.maps.event.addListener(marker, "click", function() {
      return infowindow.open(map, marker);
    });
  });
};
