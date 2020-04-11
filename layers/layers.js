var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var lyr_Precipitacionesmarzo2020_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitaciones marzo 2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacionesmarzo2020_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-132476.539649, 4587970.764975, -44709.544128, 4695869.508612]
                            })
                        });var format_Recintosmunicipales_1 = new ol.format.GeoJSON();
var features_Recintosmunicipales_1 = format_Recintosmunicipales_1.readFeatures(json_Recintosmunicipales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recintosmunicipales_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Recintosmunicipales_1.addFeatures(features_Recintosmunicipales_1);var lyr_Recintosmunicipales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recintosmunicipales_1, 
                style: style_Recintosmunicipales_1,
                title: '<img src="styles/legend/Recintosmunicipales_1.png" /> Recintos municipales'
            });var format_Lneasprovinciales_2 = new ol.format.GeoJSON();
var features_Lneasprovinciales_2 = format_Lneasprovinciales_2.readFeatures(json_Lneasprovinciales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lneasprovinciales_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lneasprovinciales_2.addFeatures(features_Lneasprovinciales_2);var lyr_Lneasprovinciales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lneasprovinciales_2, 
                style: style_Lneasprovinciales_2,
                title: '<img src="styles/legend/Lneasprovinciales_2.png" /> Líneas provinciales'
            });var format_Datosprecipitacin_3 = new ol.format.GeoJSON();
var features_Datosprecipitacin_3 = format_Datosprecipitacin_3.readFeatures(json_Datosprecipitacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datosprecipitacin_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Datosprecipitacin_3.addFeatures(features_Datosprecipitacin_3);var lyr_Datosprecipitacin_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Datosprecipitacin_3, 
                style: style_Datosprecipitacin_3,
                title: '<img src="styles/legend/Datosprecipitacin_3.png" /> Datos precipitación'
            });

lyr_Precipitacionesmarzo2020_0.setVisible(true);lyr_Recintosmunicipales_1.setVisible(true);lyr_Lneasprovinciales_2.setVisible(true);lyr_Datosprecipitacin_3.setVisible(true);
var layersList = [baseLayer,lyr_Precipitacionesmarzo2020_0,lyr_Recintosmunicipales_1,lyr_Lneasprovinciales_2,lyr_Datosprecipitacin_3];
lyr_Recintosmunicipales_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEVEL': 'NATLEVEL', 'NATCODE': 'NATCODE', 'Municipio': 'Municipio', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_Lneasprovinciales_2.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'NATIONALCO': 'NATIONALCO', 'COUNTRY': 'COUNTRY', 'NATIONALLE': 'NATIONALLE', 'NAME_BOUND': 'NAME_BOUND', 'DATE_BOUND': 'DATE_BOUND', 'URL_RESOUR': 'URL_RESOUR', });
lyr_Datosprecipitacin_3.set('fieldAliases', {'ESTACION': 'ESTACION', 'X': 'X', 'Y': 'Y', 'PCP': 'PCP', });
lyr_Recintosmunicipales_1.set('fieldImages', {'INSPIREID': 'Hidden', 'COUNTRY': 'Hidden', 'NATLEVEL': 'Hidden', 'NATCODE': 'Hidden', 'Municipio': 'TextEdit', 'CODNUT1': 'Hidden', 'CODNUT2': 'Hidden', 'CODNUT3': 'Hidden', });
lyr_Lneasprovinciales_2.set('fieldImages', {'INSPIREID': 'TextEdit', 'NATIONALCO': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATIONALLE': 'TextEdit', 'NAME_BOUND': 'TextEdit', 'DATE_BOUND': 'TextEdit', 'URL_RESOUR': 'TextEdit', });
lyr_Datosprecipitacin_3.set('fieldImages', {'ESTACION': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'PCP': 'TextEdit', });
lyr_Recintosmunicipales_1.set('fieldLabels', {'Municipio': 'no label', });
lyr_Lneasprovinciales_2.set('fieldLabels', {'INSPIREID': 'no label', 'NATIONALCO': 'no label', 'COUNTRY': 'no label', 'NATIONALLE': 'no label', 'NAME_BOUND': 'no label', 'DATE_BOUND': 'no label', 'URL_RESOUR': 'no label', });
lyr_Datosprecipitacin_3.set('fieldLabels', {'ESTACION': 'no label', 'PCP': 'header label', });
lyr_Datosprecipitacin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});