//import { startMapTemplate } from '../../assets/template/content';
//import gpxParser from 'gpxparser'
//import axios from 'axios'; 
//import { startMapTemplate } from ''
import GpsDrawMap from './gps-draw-map';
//import { point } from 'leaflet';
//startMapTemplate(document, 'Seccion 3 - 11 leer');

/*
axios.get('https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/track.gpx')
.then( result => {
    var gpx = new gpxParser(); //Create gpxParser Object
    gpx.parse(result.data); //parse gpx file from string data
    gpx.tracks[0].points.map((point) => console.log(point.lat, point.lon));
})
.catch( error => console.error(error));*/

const gpsDrawMap = new GpsDrawMap();

gpsDrawMap.getPoints("https://raw.githubusercontent.com/GerProko/rutas/main/mapstogpx20231123_111341.gpx?token=GHSAT0AAAAAACKUVQOVEF6SF37BUT6IHL3UZLCSW7A");