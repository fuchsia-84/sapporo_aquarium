function initialize() {

    const google = window.google;
  
    //緯度経度の変数
    const lat_lng = {
      lat: 43.03056567443755, //緯度
      lng: 141.45747683931873 //経度
    };
    //緯度経度を設定
    let map = new google.maps.Map(document.getElementById('js-map-target'), {
      center: lat_lng,
      zoom: 16
    });
    
    //スタイルの設定
    let style = new google.maps.StyledMapType(
        [
            {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#dedede"
                },
                {
                  "lightness": 35
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#919191"
                },
                {
                  "lightness": 40
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#f4f194"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#49c574"
                },
                {
                  "saturation": -50
                },
                {
                  "lightness": 55
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#55dd9b"
                },
                {
                  "lightness": 35
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#55dd9b"
                },
                {
                  "saturation": -55
                },
                {
                  "lightness": 50
                }
              ]
            },
            {
              "featureType": "transit.station.airport",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#3c6fcd"
                }
              ]
            },
            {
              "featureType": "transit.station.bus",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#eeac3a"
                }
              ]
            },
            {
              "featureType": "transit.station.rail",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#e4644e"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#4bc2d2"
                },
                {
                  "saturation": -10
                },
                {
                  "lightness": 55
                }
              ]
            }
        ],{name: 'Styled Map'});
    
    //マーカー用の画像
    const marker_image = url('https://fuchsia-84.github.io/sapporo_aquarium/img/map_icon.png');
  
    //マーカー
    let marker = new google.maps.Marker({
      position: lat_lng,
      map: map,
      icon: marker_image
    });
    
    //オプションを適用
    map.mapTypes.set('js-map-target', style, marker);
    
    //マップをセット
    map.setMapTypeId('js-map-target');
    
  }
  
  initialize(); // マップを初期化して表示