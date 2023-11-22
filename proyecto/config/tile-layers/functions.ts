import { tileLayer } from "leaflet";
import { tileLayers } from "./data";
import { ITilerLayerOptions } from "./option.interface";

export const tileLayerSelect = (
    layer: string = tileLayers.baseLayers.default.map,
    options: ITilerLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        atribution: tileLayers.baseLayers.default.atribution
    }
) => {
    if(options) {
        return tileLayer(layer, options);
    }
}