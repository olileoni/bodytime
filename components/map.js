let center = [55.03141591115069,82.9142384153442];

    function init() {
        let map = new ymaps.Map('contacts__map', {
            center: center,
            zoom: 17,
        });
    
        let placemark = new ymaps.Placemark(center, {}, {
            iconLayout: 'default#image',
            iconImageHref: '../../1/assets/img/map.png',
            iconImageSize: [50, 50],
            iconImageOffset: [0, 0]
        });
    
        map.controls.remove('searchControl');
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl');
    
        map.geoObjects.add(placemark);
    }
    
    ymaps.ready(init);