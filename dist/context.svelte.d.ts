import type { LngLatLike, Map as MapLibre, MapMouseEvent, Marker } from 'maplibre-gl';
import { SvelteSet } from 'svelte/reactivity';
import type { ClusterOptions, MarkerClickInfo } from './types';
import type { PickingInfo } from '@deck.gl/core';
export declare let nextId: number;
/** Return an ID to use for a source or layer, in case you don't care about
 * the name. */
export declare function getId(prefix: string): string;
export interface LayerInfo {
  interactive: boolean;
}
export declare class Box<T> {
  value: T;
  constructor(initialValue: T);
}
export declare class MapContext {
  map: MapLibre;
  loaded: boolean;
  /** A list of images that have been successfully loaded. */
  loadedImages: SvelteSet<string>;
  minzoom: number;
  maxzoom: number;
  layerInfo: Map<string, LayerInfo>;
  private eventTracker;
  private _eventTopMost;
  eventTopMost: (event: MapMouseEvent) => string | undefined;
  /** Subscribe to marker clicks globally. Marker clicks intentionally do not propagate their events
   * to the map, but some internal components such as Popups need to know when any click happens, on the
   * map or on a marker, and MarkerClickManager facilitates that functionality. */
  markerClickManager: MarkerClickManager;
  constructor();
}
export declare class ZoomRange {
  minzoomSetting: number | undefined;
  maxzoomSetting: number | undefined;
  parent: {
    minzoom: number;
    maxzoom: number;
  };
  minzoom: number;
  maxzoom: number;
  constructor(
    minzoom: number | undefined,
    maxzoom: number | undefined,
    parent: {
      minzoom: number;
      maxzoom: number;
    }
  );
}
export declare function setLayer(value: Box<string | undefined>): void;
export declare function getLayer(): Box<string> | undefined;
export declare function setSource(value: Box<string | undefined>): void;
export declare function getSource(): Box<string> | undefined;
export declare function setPopupTarget(value: Box<Marker | string | undefined>): void;
export declare function getPopupTarget(): Box<Marker | string> | undefined;
export declare function setCluster(value: Box<ClusterOptions | undefined>): void;
export declare function getCluster(): Box<ClusterOptions | undefined> | undefined;
export declare function setZoomLimits(min: number | undefined, max: number | undefined): ZoomRange;
export declare function getZoomLimits(): {
  minzoom: number;
  maxzoom: number;
};
export declare function getLayerEvent(): Box<LayerEvent | undefined>;
export declare function setLayerEvent(value: Box<LayerEvent | undefined>): void;
export declare function setLngLatContext(value: Box<LngLatLike | undefined>): void;
export declare function getLngLatContext(): Box<LngLatLike | undefined> | undefined;
export type MarkerMouseEvent = MarkerClickInfo & {
  layerType: 'marker';
  type: string;
};
export interface DeckGlMouseEvent<DATA = unknown> extends PickingInfo<DATA> {
  layerType: 'deckgl';
  type: 'click' | 'mouseenter' | 'mouseleave' | 'mousemove';
}
export type LayerEvent = DeckGlMouseEvent<unknown> | MarkerMouseEvent;
export declare function getMapContext(): MapContext;
export declare function createMapContext(): MapContext;
export declare function updatedSourceContext(): {
  source: Box<string | undefined>;
  cluster: Box<ClusterOptions | undefined>;
};
export declare function updatedLayerContext(interactive?: boolean): {
  layer: Box<string | undefined>;
  layerEvent: Box<LayerEvent | undefined>;
};
export declare function updatedDeckGlContext(): {
  layer: Box<string | undefined>;
  layerEvent: Box<LayerEvent | undefined>;
};
export declare function updatedMarkerContext(): {
  marker: Box<Marker | undefined>;
  layerEvent: Box<LayerEvent | undefined>;
};
export declare function updatedZoomRangeContext(
  minzoom: number | undefined,
  maxzoom: number | undefined
): {
  originalMinZoom: number;
  originalMaxZoom: number;
  minzoom: number;
  maxzoom: number;
};
export declare function isDeckGlMouseEvent(
  event: MapMouseEvent | DeckGlMouseEvent
): event is DeckGlMouseEvent<unknown>;
type MarkerClickCallback = (event: MarkerClickInfo) => void;
declare class MarkerClickManager {
  private _handlers;
  add(markerClickInfo: MarkerClickCallback): void;
  remove(markerClickInfo: MarkerClickCallback): void;
  handleClick(event: MarkerClickInfo): void;
}
export {};
