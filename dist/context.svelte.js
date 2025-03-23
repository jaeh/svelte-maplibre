import { getContext, setContext } from 'svelte';
import { SvelteSet } from 'svelte/reactivity';
// Choose current time instead of 0 to avoid possible reuse during HMR.
export let nextId = Date.now();
/** Return an ID to use for a source or layer, in case you don't care about
 * the name. */
export function getId(prefix) {
  return `${prefix}-${nextId++}`;
}
export class Box {
  value = $state();
  constructor(initialValue) {
    this.value = initialValue;
  }
}
export class MapContext {
  map = $state();
  loaded = $state(false);
  // cluster: Box<ClusterOptions | undefined>;
  /** A list of images that have been successfully loaded. */
  loadedImages = new SvelteSet();
  minzoom = $state(0);
  maxzoom = $state(24);
  // Information about every layer in the system.
  layerInfo = new Map();
  eventTracker = new WeakMap();
  _eventTopMost(event) {
    let id = this.eventTracker.get(event.originalEvent);
    if (id !== undefined) {
      return id;
    }
    let features = event.target.queryRenderedFeatures(event.point);
    let topId = features.find((f) => this.layerInfo.get(f.layer.id)?.interactive)?.layer.id;
    this.eventTracker.set(event.originalEvent, topId);
    return topId;
  }
  eventTopMost;
  /** Subscribe to marker clicks globally. Marker clicks intentionally do not propagate their events
   * to the map, but some internal components such as Popups need to know when any click happens, on the
   * map or on a marker, and MarkerClickManager facilitates that functionality. */
  markerClickManager = new MarkerClickManager();
  constructor() {
    // Do it this way so that we can destructure the MapContext and still use eventTopMost
    this.eventTopMost = this._eventTopMost.bind(this);
  }
}
export class ZoomRange {
  minzoomSetting = $state();
  maxzoomSetting = $state();
  parent;
  minzoom;
  maxzoom;
  constructor(minzoom, maxzoom, parent) {
    this.minzoomSetting = minzoom;
    this.maxzoomSetting = maxzoom;
    this.parent = parent;
    const minzoomD = $derived(this.minzoomSetting ?? this.parent?.minzoom ?? 0);
    const maxzoomD = $derived(this.maxzoomSetting ?? this.parent?.maxzoom ?? 24);
    this.minzoom = minzoomD;
    this.maxzoom = maxzoomD;
  }
}
export function setLayer(value) {
  setContext(LAYER_KEY, value);
}
export function getLayer() {
  return getContext(LAYER_KEY);
}
export function setSource(value) {
  setContext(SOURCE_KEY, value);
}
export function getSource() {
  return getContext(SOURCE_KEY);
}
export function setPopupTarget(value) {
  setContext(POPUP_TARGET_KEY, value);
}
export function getPopupTarget() {
  return getContext(POPUP_TARGET_KEY);
}
export function setCluster(value) {
  setContext(CLUSTER_KEY, value);
}
export function getCluster() {
  return getContext(CLUSTER_KEY);
}
export function setZoomLimits(min, max) {
  const existing = getZoomLimits();
  return setContext(ZOOM_KEY, new ZoomRange(min, max, existing));
}
export function getZoomLimits() {
  return getContext(ZOOM_KEY) || getMapContext();
}
export function getLayerEvent() {
  return getContext(LAYER_EVENT_KEY);
}
export function setLayerEvent(value) {
  setContext(LAYER_EVENT_KEY, value);
}
export function setLngLatContext(value) {
  setContext(LNG_LAT_KEY, value);
}
export function getLngLatContext() {
  return getContext(LNG_LAT_KEY);
}
const MAP_CONTEXT_KEY = Symbol.for('svelte-maplibre');
const POPUP_TARGET_KEY = Symbol.for('svelte-maplibre.popup-target');
const LAYER_KEY = Symbol.for('svelte-maplibre.layer');
const SOURCE_KEY = Symbol.for('svelte-maplibre.source');
const CLUSTER_KEY = Symbol.for('svelte-maplibre.cluster');
const ZOOM_KEY = Symbol.for('svelte-maplibre.zoom');
const LAYER_EVENT_KEY = Symbol.for('svelte-maplibre.layer-event');
const LNG_LAT_KEY = Symbol.for('svelte-maplibre.lng-lat');
export function getMapContext() {
  return getContext(MAP_CONTEXT_KEY);
}
export function createMapContext() {
  return setContext(MAP_CONTEXT_KEY, new MapContext());
}
export function updatedSourceContext() {
  const source = new Box(undefined);
  const cluster = new Box(undefined);
  setSource(source);
  setCluster(cluster);
  return {
    source,
    cluster,
  };
}
export function updatedLayerContext(interactive = true) {
  const layer = new Box(undefined);
  const layerEvent = new Box(undefined);
  setLayer(layer);
  if (interactive) {
    setPopupTarget(layer);
    setLayerEvent(layerEvent);
  }
  return {
    layer,
    layerEvent,
  };
}
export function updatedDeckGlContext() {
  const layer = new Box(undefined);
  const layerEvent = new Box(undefined);
  setLayer(layer);
  setLayerEvent(layerEvent);
  return {
    layer,
    layerEvent,
  };
}
export function updatedMarkerContext() {
  const marker = new Box(undefined);
  const layerEvent = new Box(undefined);
  setPopupTarget(marker);
  setLayerEvent(layerEvent);
  return {
    marker,
    layerEvent,
  };
}
export function updatedZoomRangeContext(minzoom, maxzoom) {
  let currentZoom = getZoomLimits();
  minzoom ??= currentZoom.minzoom;
  maxzoom ??= currentZoom.maxzoom;
  setZoomLimits(minzoom, maxzoom);
  return {
    originalMinZoom: currentZoom.minzoom,
    originalMaxZoom: currentZoom.maxzoom,
    minzoom,
    maxzoom,
  };
}
export function isDeckGlMouseEvent(event) {
  return 'layerType' in event && event.layerType === 'deckgl';
}
class MarkerClickManager {
  _handlers = new Set();
  add(markerClickInfo) {
    this._handlers.add(markerClickInfo);
  }
  remove(markerClickInfo) {
    this._handlers.delete(markerClickInfo);
  }
  handleClick(event) {
    for (const handler of this._handlers) {
      handler(event);
    }
  }
}
