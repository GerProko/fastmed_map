import { circle, Map, polyline } from 'leaflet';
import { tileLayers } from './config/tile-layers/data';
import { tileLayerSelect } from './config/tile-layers/functions';
import gpxParser from 'gpxparser'
import axios from 'axios'; 
import { NumericLiteral } from 'typescript';

class GpsDrawMap {
    private map!: Map;
    private location!: [number, number];
    constructor(location: [number, number] = [0, 0]) {
        this.location = location;
        this.initMap();
    }

    private initMap = () => {
        this.map = new Map('map').setView(this.location, 10);

        tileLayerSelect(tileLayers.baseLayers.default.map, {
            atribution: tileLayers.baseLayers.default.atribution
        })?.addTo(this.map);
    }

    getPoints = (trackUrl: string) => {
        axios
        .get(
            trackUrl
            )
        .then( result => {
            var gpx = new gpxParser(); //Create gpxParser Object
            gpx.parse(result.data); //parse gpx file from string data
            this.drawPoints(gpx.tracks[0].points);
        })
        .catch( error => console.error(error));
    };

    drawPoints = (points: Array<{lat: number, lon: number}>) => {
        //coordenadas
        const coordinates: [number, number][] = points.map((point) => {
            return[
                point.lat,
                point.lon
            ]
        });
        //dibujo la linea
        polyline(coordinates,{
            color: 'blue'
        }).addTo(this.map);

        circle([
            points[0].lat, points[0].lon
        ], {
            color: 'white', weight: 1, fillColor: 'green', fillOpacity: 1, radius: 7.5
        }).addTo(this.map).bindPopup('INICIO');

        circle([
            points[points.length - 1].lat, points[points.length - 1].lon
        ], {
            color: 'white', weight: 1, fillColor: 'red', fillOpacity: 1, radius: 7.5
        }).addTo(this.map).bindPopup('FINAL');

        this.map.fitBounds(coordinates);
    }
}

export default GpsDrawMap;