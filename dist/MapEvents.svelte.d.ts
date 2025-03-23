import maplibregl from 'maplibre-gl';
import type { MapMoveEvent } from './types.js';
declare const MapEvents: import('svelte').Component<
  {
    /** Limit the event handlers to a certain layer. */
    layer?: string | undefined;
    onclick?: (e: maplibregl.MapMouseEvent) => void;
    ondblclick?: (e: maplibregl.MapMouseEvent) => void;
    oncontextmenu?: (e: maplibregl.MapMouseEvent) => void;
    onmovestart?: (e: MapMoveEvent) => void;
    onmoveend?: (e: MapMoveEvent) => void;
    onzoomstart?: (e: maplibregl.MapLibreZoomEvent) => void;
    onzoom?: (e: maplibregl.MapLibreZoomEvent) => void;
    onzoomend?: (e: maplibregl.MapLibreZoomEvent) => void;
    onpitch?: (e: maplibregl.MapLibreEvent<MouseEvent | TouchEvent | undefined>) => void;
    onrotate?: (e: maplibregl.MapLibreEvent<MouseEvent | TouchEvent | undefined>) => void;
    onwheel?: (e: maplibregl.MapWheelEvent) => void;
    ondata?: (e: maplibregl.MapDataEvent) => void;
    onstyledata?: (e: maplibregl.MapStyleDataEvent) => void;
    onidle?: (e: maplibregl.MapLibreEvent) => void;
  },
  {},
  ''
>;
type MapEvents = ReturnType<typeof MapEvents>;
export default MapEvents;
