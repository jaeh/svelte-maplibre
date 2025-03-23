import maplibre, { type LngLatBoundsLike, type LngLatLike, type FlyToOptions } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { type CustomImageSpec, type MapMoveEvent, type StyleLoadEvent } from './types.js';
import type { Snippet } from 'svelte';
declare const MapLibre: import('svelte').Component<
  {
    map?: maplibregl.Map;
    /** The `div` element that the Map is placed into. You can bind to this prop to access the element for yourself.
     * Setting it externally will have no effect. */
    mapContainer?: HTMLDivElement | undefined;
    class?: string | undefined;
    /** The style to use for the map. */
    style: string | maplibregl.StyleSpecification;
    /** Tell MapLibre to update the map in place when changing the style, diffing the old style against the new one to
     * make minimal changes. If you enable this, be aware of https://github.com/maplibre/maplibre-gl-js/issues/2651,
     * which may prevent some style changes from becoming visible when diffing is enabled. */
    diffStyleUpdates?: boolean;
    center?: LngLatLike | undefined;
    zoom?: number | undefined;
    pitch?: number;
    bearing?: number;
    bearingSnap?: number;
    bounds?: LngLatBoundsLike | undefined;
    fitBoundsOptions?: FlyToOptions;
    projection?: maplibregl.ProjectionSpecification | undefined;
    /** Set to true to track the map viewport in the URL hash. If the URL hash is set, that overrides initial viewport settings. */
    hash?: boolean;
    /** Update the URL when the hash changes, if `hash` is true.
     * The default behavior uses `window.history.replaceState`. For SvelteKit, you should
     *  `import { replaceState } from '$app/navigation';` and pass something like
     *  `updateHash={(u) => replaceState(u, $page.state)}` when instantiating the map.
     */
    updateHash?: (url: URL) => void;
    loaded?: boolean;
    minZoom?: number;
    maxZoom?: number;
    minPitch?: number;
    maxPitch?: number;
    renderWorldCopies?: boolean;
    dragPan?: boolean;
    dragRotate?: boolean;
    pitchWithRotate?: boolean;
    antialias?: boolean;
    zoomOnDoubleClick?: boolean;
    /** Override MapLibre's default locale table */
    locale?: any;
    interactive?: boolean;
    /** Set false to hide the default attribution control, so you can add your own. */
    attributionControl?: false | maplibre.AttributionControlOptions;
    /** Set true to require hitting ⌘/Ctrl while scrolling to zoom. Or use two fingers on phones. */
    cooperativeGestures?: boolean;
    /** Set to true if you want to export the map as an image */
    preserveDrawingBuffer?: boolean;
    maxBounds?: LngLatBoundsLike | undefined;
    /** Custom images to load into the map. */
    images?: CustomImageSpec[];
    /** Set to true or a position to add all the standard controls. */
    standardControls?: boolean | maplibregl.ControlPosition;
    /** Filter the map's builtin layers, hiding any for which this function returns false. */
    filterLayers?: ((layer: maplibregl.LayerSpecification) => boolean) | undefined;
    /** Function that modifies requests, such as by adding an API key. **/
    transformRequest?: maplibregl.RequestTransformFunction | undefined;
    children?: Snippet<
      [
        {
          map: maplibregl.Map;
          loaded: boolean;
          loadedImages: Set<string>;
          allImagesLoaded: boolean;
        },
      ]
    >;
    onload?: (map: maplibregl.Map) => void;
    onerror?: (error: Partial<ErrorEvent>) => void;
    onclick?: (e: maplibregl.MapMouseEvent) => void;
    ondblclick?: (e: maplibregl.MapMouseEvent) => void;
    onmousemove?: (e: maplibregl.MapMouseEvent) => void;
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
    onstyleload?: (e: StyleLoadEvent) => void;
    onstyledata?: (e: maplibregl.MapStyleDataEvent) => void;
    onidle?: (e: maplibregl.MapLibreEvent) => void;
  },
  {},
  'zoom' | 'map' | 'loaded' | 'pitch' | 'center' | 'bounds' | 'mapContainer' | 'bearing'
>;
type MapLibre = ReturnType<typeof MapLibre>;
export default MapLibre;
