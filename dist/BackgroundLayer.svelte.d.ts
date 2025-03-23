import type { Feature } from 'geojson';
import type { CommonLayerProps } from './types.js';
declare class __sveltets_Render<FEATURE extends Feature = Feature> {
  props(): Omit<CommonLayerProps<FEATURE>, 'source' | 'sourceLayer'> & {
    paint: maplibregl.BackgroundLayerSpecification['paint'];
    layout?: maplibregl.BackgroundLayerSpecification['layout'];
    applyToClusters?: boolean | undefined;
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
declare const BackgroundLayer: $$IsomorphicComponent;
type BackgroundLayer<FEATURE extends Feature = Feature> = InstanceType<
  typeof BackgroundLayer<FEATURE>
>;
export default BackgroundLayer;
