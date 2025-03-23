import type { Feature } from 'geojson';
import type maplibregl from 'maplibre-gl';
import type { CommonLayerProps } from './types.js';
declare class __sveltets_Render<FEATURE extends Feature = Feature> {
  props(): CommonLayerProps<FEATURE> & {
    type: maplibregl.LayerSpecification['type'];
    paint?: object | undefined;
    layout?: object | undefined;
    applyToClusters?: boolean;
    requireSource?: boolean;
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
 * A component that handles a generic layer. This is intended for use by other type-specific
 * layer components, such as FillLayer, and usually you will want to use one of those in your
 * code instead of directly using this component.
 */
declare const Layer: $$IsomorphicComponent;
type Layer<FEATURE extends Feature = Feature> = InstanceType<typeof Layer<FEATURE>>;
export default Layer;
