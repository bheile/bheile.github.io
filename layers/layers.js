var wms_layers = [];
var format_iscm_0 = new ol.format.GeoJSON();
var features_iscm_0 = format_iscm_0.readFeatures(json_iscm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iscm_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_iscm_0.addFeatures(features_iscm_0);var lyr_iscm_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_iscm_0, 
                style: style_iscm_0,
    title: 'iscm<br />\
    <img src="styles/legend/iscm_0_0.png" /> 0<br />\
    <img src="styles/legend/iscm_0_1.png" /> 1922<br />\
    <img src="styles/legend/iscm_0_2.png" /> 1923<br />\
    <img src="styles/legend/iscm_0_3.png" /> 1924<br />\
    <img src="styles/legend/iscm_0_4.png" /> 1925<br />\
    <img src="styles/legend/iscm_0_5.png" /> 1926<br />\
    <img src="styles/legend/iscm_0_6.png" /> 1932<br />\
    <img src="styles/legend/iscm_0_7.png" /> 1933<br />\
    <img src="styles/legend/iscm_0_8.png" /> 1935<br />\
    <img src="styles/legend/iscm_0_9.png" /> 1937<br />\
    <img src="styles/legend/iscm_0_10.png" /> 1938<br />\
    <img src="styles/legend/iscm_0_11.png" /> 1946<br />\
    <img src="styles/legend/iscm_0_12.png" /> 1948<br />\
    <img src="styles/legend/iscm_0_13.png" /> 1949<br />\
    <img src="styles/legend/iscm_0_14.png" /> 1951<br />\
    <img src="styles/legend/iscm_0_15.png" /> 1953<br />\
    <img src="styles/legend/iscm_0_16.png" /> 1957<br />\
    <img src="styles/legend/iscm_0_17.png" /> 1974<br />\
    <img src="styles/legend/iscm_0_18.png" /> 1975<br />\
    <img src="styles/legend/iscm_0_19.png" /> 1980<br />'
        });

lyr_iscm_0.setVisible(true);
var layersList = [lyr_iscm_0];
lyr_iscm_0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_A3_IS': 'ADM0_A3_IS', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'ISCM': 'ISCM Membership Date', 'Current': 'Current or Past Member', });
lyr_iscm_0.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'LABELRANK': 'Hidden', 'SOVEREIGNT': 'Hidden', 'SOV_A3': 'Hidden', 'ADM0_DIF': 'Hidden', 'LEVEL': 'Hidden', 'TYPE': 'Hidden', 'ADMIN': 'Hidden', 'ADM0_A3': 'Hidden', 'GEOU_DIF': 'Hidden', 'GEOUNIT': 'Hidden', 'GU_A3': 'Hidden', 'SU_DIF': 'Hidden', 'SUBUNIT': 'Hidden', 'SU_A3': 'Hidden', 'BRK_DIFF': 'Hidden', 'NAME': 'TextEdit', 'NAME_LONG': 'Hidden', 'BRK_A3': 'Hidden', 'BRK_NAME': 'Hidden', 'BRK_GROUP': 'Hidden', 'ABBREV': 'Hidden', 'POSTAL': 'Hidden', 'FORMAL_EN': 'Hidden', 'FORMAL_FR': 'Hidden', 'NAME_CIAWF': 'Hidden', 'NOTE_ADM0': 'Hidden', 'NOTE_BRK': 'Hidden', 'NAME_SORT': 'Hidden', 'NAME_ALT': 'Hidden', 'MAPCOLOR7': 'Hidden', 'MAPCOLOR8': 'Hidden', 'MAPCOLOR9': 'Hidden', 'MAPCOLOR13': 'Hidden', 'FIPS_10_': 'Hidden', 'ISO_A2': 'Hidden', 'ISO_A3': 'Hidden', 'ISO_A3_EH': 'Hidden', 'ISO_N3': 'Hidden', 'UN_A3': 'Hidden', 'WB_A2': 'Hidden', 'WB_A3': 'Hidden', 'WOE_ID': 'Hidden', 'WOE_ID_EH': 'Hidden', 'WOE_NOTE': 'Hidden', 'ADM0_A3_IS': 'Hidden', 'ADM0_A3_US': 'Hidden', 'ADM0_A3_UN': 'Hidden', 'ADM0_A3_WB': 'Hidden', 'CONTINENT': 'Hidden', 'REGION_UN': 'Hidden', 'SUBREGION': 'Hidden', 'REGION_WB': 'Hidden', 'NAME_LEN': 'Hidden', 'LONG_LEN': 'Hidden', 'ABBREV_LEN': 'Hidden', 'TINY': 'Hidden', 'HOMEPART': 'Hidden', 'MIN_ZOOM': 'Hidden', 'MIN_LABEL': 'Hidden', 'MAX_LABEL': 'Hidden', 'ISCM': 'TextEdit', 'Current': 'TextEdit', });
lyr_iscm_0.set('fieldLabels', {'NAME': 'no label', 'ISCM': 'inline label', 'Current': 'inline label', });
lyr_iscm_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});