import type { Feature } from 'geojson';
import type { CommonLayerProps } from './types.js';
declare class __sveltets_Render<FEATURE extends Feature = Feature> {
  props(): CommonLayerProps<FEATURE> & {
    paint: maplibregl.FillExtrusionLayerSpecification['paint'];
    layout?: maplibregl.FillExtrusionLayerSpecification['layout'] | undefined;
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
declare const FillExtrusionLayer: $$IsomorphicComponent;
type FillExtrusionLayer<FEATURE extends Feature = Feature> = InstanceType<
  typeof FillExtrusionLayer<FEATURE>
>;
export default FillExtrusionLayer;
