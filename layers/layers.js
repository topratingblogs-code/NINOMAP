var wms_layers = [];

var lyr_warning_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'warning<br />\
    <img src="styles/legend/warning_0_0.png" /> 1<br />\
    <img src="styles/legend/warning_0_1.png" /> 2<br />\
    <img src="styles/legend/warning_0_2.png" /> 3<br />\
    <img src="styles/legend/warning_0_3.png" /> 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/warning_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13015000.000000, 513052.388250, 14095000.000000, 2407728.634930]
        })
    });

lyr_warning_0.setVisible(true);
var layersList = [lyr_warning_0];
