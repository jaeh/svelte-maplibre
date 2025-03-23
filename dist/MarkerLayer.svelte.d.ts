import type maplibregl from 'maplibre-gl';
import type { Feature } from 'geojson';
import type { Snippet } from 'svelte';
import type { FeatureWithId, MarkerClickInfo, MarkerClickInfoFeature } from './types';
declare class __sveltets_Render<FEATURE extends Feature = Feature> {
  props(): {
    applyToClusters?: boolean;
    filter?: maplibregl.ExpressionSpecification;
    /** How to calculate the coordinates of the marker.
     * @default Calls d3.geoCentroid` on the feature. */
    markerLngLat?: ((feature: FEATURE) => [number, number]) | undefined;
    /** Handle mouse events */
    interactive?: boolean;
    /** Make markers tabbable and add the button role. */
    asButton?: boolean;
    draggable?: boolean;
    minzoom?: number;
    maxzoom?: number;
    hovered?: FEATURE | undefined;
    /** The z-index of the markers. This can also be set via CSS classes using the `class` prop.
     * If a function is provided, it will be called with each feature as an argument. */
    zIndex?: number | ((feature: FEATURE) => number) | undefined;
    class?: string;
    children?:
      | Snippet<
          [
            {
              feature: FEATURE;
              position: [number, number];
            },
          ]
        >
      | undefined;
    onclick?:
      | ((
          e: MarkerClickInfo<MarkerClickInfoFeature<FEATURE>> & {
            source: string | undefined;
            feature: FeatureWithId<FEATURE>;
          }
        ) => void)
      | undefined;
    ondblclick?:
      | ((
          e: MarkerClickInfo<MarkerClickInfoFeature<FEATURE>> & {
            source: string | undefined;
            feature: FeatureWithId<FEATURE>;
          }
        ) => void)
      | undefined;
    oncontextmenu?:
      | ((
          e: MarkerClickInfo<MarkerClickInfoFeature<FEATURE>> & {
            source: string | undefined;
            feature: FeatureWithId<FEATURE>;
          }
        ) => void)
      | undefined;
    ondrag?:
      | ((
          e: MarkerClickInfo<MarkerClickInfoFeature<FEATURE>> & {
            source: string | undefined;
            feature: FeatureWithId<FEATURE>;
          }
        ) => void)
      | undefined;
    ondragstart?:
      | ((
          e: MarkerClickInfo<MarkerClickInfoFeature<FEATURE>> & {
            source: string | undefined;
            feature: FeatureWithId<FEATURE>;
          }
        ) => void)
      | undefined;
    ondragend?:
      | ((
          e: MarkerClickInfo<MarkerClickInfoFeature<FEATURE>> & {
            source: string | undefined;
            feature: FeatureWithId<FEATURE>;
          }
        ) => void)
      | undefined;
  };
  events(): {};
  slots(): {};
  bindings(): 'hovered';
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
/**
 * Manages a set of HTML markers for the features in a source.
 * This acts similar to a Layer component, but is not actually registered with
 * the map as a layer. Markers for non-point features are placed at the geometry's center.
 */
declare const MarkerLayer: $$IsomorphicComponent;
type MarkerLayer<FEATURE extends Feature = Feature> = InstanceType<typeof MarkerLayer<FEATURE>>;
export default MarkerLayer;
