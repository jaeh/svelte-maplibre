import maplibre, { type LngLatLike, type PointLike } from 'maplibre-gl';
import type { Snippet } from 'svelte';
import type { MarkerClickInfo } from './types';
import type { Feature, Point } from 'geojson';
declare class __sveltets_Render<DATA extends Feature = Feature> {
  props(): {
    /** The Marker instance which was added to the map */
    marker?: maplibre.Marker | undefined;
    lngLat: LngLatLike;
    class?: string | undefined;
    anchor?: maplibre.PositionAnchor;
    /** Handle mouse events */
    draggable?: boolean;
    /** A GeoJSON Feature related to the point. This is only actually used to send an ID and set of properties along with
     * the event, and can be safely omitted. The `lngLat` prop controls the marker's location even if this is provided. */
    feature?: DATA | undefined;
    /** An offset in pixels to apply to the marker. */
    offset?: PointLike | undefined;
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
    ondrag?: ((e: MarkerClickInfo<Feature<Point, DATA['properties']>>) => void) | undefined;
    ondragstart?: ((e: MarkerClickInfo<Feature<Point, DATA['properties']>>) => void) | undefined;
    ondragend?: ((e: MarkerClickInfo<Feature<Point, DATA['properties']>>) => void) | undefined;
  };
  events(): {};
  slots(): {};
  bindings(): 'marker' | 'lngLat';
  exports(): {};
}
interface $$IsomorphicComponent {
  new <DATA extends Feature = Feature>(
    options: import('svelte').ComponentConstructorOptions<
      ReturnType<__sveltets_Render<DATA>['props']>
    >
  ): import('svelte').SvelteComponent<
    ReturnType<__sveltets_Render<DATA>['props']>,
    ReturnType<__sveltets_Render<DATA>['events']>,
    ReturnType<__sveltets_Render<DATA>['slots']>
  > & {
    $$bindings?: ReturnType<__sveltets_Render<DATA>['bindings']>;
  } & ReturnType<__sveltets_Render<DATA>['exports']>;
  <DATA extends Feature = Feature>(
    internal: unknown,
    props: ReturnType<__sveltets_Render<DATA>['props']> & {}
  ): ReturnType<__sveltets_Render<DATA>['exports']>;
  z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const DefaultMarker: $$IsomorphicComponent;
type DefaultMarker<DATA extends Feature = Feature> = InstanceType<typeof DefaultMarker<DATA>>;
export default DefaultMarker;
