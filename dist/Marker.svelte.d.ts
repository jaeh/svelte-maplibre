import maplibre, { type LngLatLike, type PointLike } from 'maplibre-gl';
import type { Snippet } from 'svelte';
import type { MarkerClickInfo, MarkerClickInfoFeature as GenMarkerClickInfoFeature } from './types';
import type { Feature } from 'geojson';
declare class __sveltets_Render<FEATURE extends Feature = Feature> {
  props(): {
    /** The Marker instance which was added to the map */
    marker?: maplibre.Marker | undefined;
    lngLat: LngLatLike;
    class?: string | undefined;
    anchor?: maplibre.PositionAnchor;
    /** Handle mouse events */
    interactive?: boolean;
    /** Make markers tabbable and add the button role. */
    asButton?: boolean;
    draggable?: boolean;
    /** A GeoJSON Feature related to the point. This is only actually used to send an ID and set of properties along with
     * the event, and can be safely omitted. The `lngLat` prop controls the marker's location even if this is provided. */
    feature?: FEATURE | undefined;
    /** An offset in pixels to apply to the marker. */
    offset?: PointLike;
    /** The z-index of the marker. This can also be set via CSS classes using the `class` prop */
    zIndex?: number;
    /** The rotation angle of the marker (clockwise, in degrees) */
    rotation?: number;
    /** The opacity of the marker */
    opacity?: number;
    children?:
      | Snippet<
          [
            {
              marker: maplibre.Marker;
            },
          ]
        >
      | undefined;
    ondrag?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
    ondragstart?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
    ondragend?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
    onclick?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
    ondblclick?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
    oncontextmenu?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
    onmouseenter?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
    onmouseleave?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
    onmousemove?: ((e: MarkerClickInfo<GenMarkerClickInfoFeature<FEATURE>>) => void) | undefined;
  };
  events(): {};
  slots(): {};
  bindings(): 'marker' | 'lngLat';
  exports(): {};
}
interface $$IsomorphicComponent {
  new <FEATURE extends Feature = Feature>(
    options: import('svelte').ComponentConstructorOptions<
      ReturnType<__sveltets_Render<FEATURE>['props']>
    >
  ): import('svelte').SvelteComponent<
    ReturnType<__sveltets_Render<FEATURE>['props']>,
    ReturnType<__sveltets_Render<FEATURE>['events']>,
    ReturnType<__sveltets_Render<FEATURE>['slots']>
  > & {
    $$bindings?: ReturnType<__sveltets_Render<FEATURE>['bindings']>;
  } & ReturnType<__sveltets_Render<FEATURE>['exports']>;
  <FEATURE extends Feature = Feature>(
    internal: unknown,
    props: ReturnType<__sveltets_Render<FEATURE>['props']> & {}
  ): ReturnType<__sveltets_Render<FEATURE>['exports']>;
  z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Marker: $$IsomorphicComponent;
type Marker<FEATURE extends Feature = Feature> = InstanceType<typeof Marker<FEATURE>>;
export default Marker;
