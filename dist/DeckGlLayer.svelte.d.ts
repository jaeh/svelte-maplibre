import type { Snippet } from 'svelte';
declare class __sveltets_Render<DATA> {
  props(): {
    [key: string]: any;
    id?: any;
    interleaved?: boolean;
    minzoom?: number | undefined;
    maxzoom?: number | undefined;
    visible?: boolean;
    /** Handle mouse events on this layer. */
    interactive?: boolean;
    /** This indicates the currently hovered feature. Setting this attribute has no effect. */
    hovered?: DATA | undefined;
    /** The deck.gl layer class to create */
    type: any;
    data: DATA[];
    beforeId?: string;
    children?: Snippet;
    onclick?:
      | ((e: {
          color: Uint8Array | null;
          layer: import('@deck.gl/core').Layer | null;
          sourceLayer?: import('@deck.gl/core').Layer | null;
          viewport?: import('@deck.gl/core').Viewport;
          index: number;
          picked: boolean;
          object?: DATA | undefined;
          x: number;
          y: number;
          pixel?: [number, number];
          coordinate?: number[];
          devicePixel?: [number, number];
          pixelRatio: number;
        }) => void)
      | undefined;
    onmousemove?:
      | ((e: {
          color: Uint8Array | null;
          layer: import('@deck.gl/core').Layer | null;
          sourceLayer?: import('@deck.gl/core').Layer | null;
          viewport?: import('@deck.gl/core').Viewport;
          index: number;
          picked: boolean;
          object?: DATA | undefined;
          x: number;
          y: number;
          pixel?: [number, number];
          coordinate?: number[];
          devicePixel?: [number, number];
          pixelRatio: number;
        }) => void)
      | undefined;
    onmouseleave?:
      | ((e: {
          color: Uint8Array | null;
          layer: import('@deck.gl/core').Layer | null;
          sourceLayer?: import('@deck.gl/core').Layer | null;
          viewport?: import('@deck.gl/core').Viewport;
          index: number;
          picked: boolean;
          object?: DATA | undefined;
          x: number;
          y: number;
          pixel?: [number, number];
          coordinate?: number[];
          devicePixel?: [number, number];
          pixelRatio: number;
        }) => void)
      | undefined;
  };
  events(): {};
  slots(): {};
  bindings(): 'hovered';
  exports(): {};
}
interface $$IsomorphicComponent {
  new <DATA>(
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
  <DATA>(
    internal: unknown,
    props: ReturnType<__sveltets_Render<DATA>['props']> & {}
  ): ReturnType<__sveltets_Render<DATA>['exports']>;
  z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const DeckGlLayer: $$IsomorphicComponent;
type DeckGlLayer<DATA> = InstanceType<typeof DeckGlLayer<DATA>>;
export default DeckGlLayer;
