import type { Feature } from 'geojson';
import maplibregl from 'maplibre-gl';
import { type Snippet } from 'svelte';
declare class __sveltets_Render<DATA = Feature> {
  props(): {
    /** Show the built-in close button. By default the close button will be shown
     * only if closeOnClickOutside and closeOnClickInside are not set. */
    closeButton?: boolean;
    /** Close on click outside the popup. */
    closeOnClickOutside?: boolean;
    /** Close on click inside the popup. This should only be used for non-interactive popups. */
    closeOnClickInside?: boolean;
    /** Close the popup when the map moves. */
    closeOnMove?: boolean;
    /** Define when to open the popup. If set to manual, you can open the popup programmatically by
     * setting the `open` attribute. */
    openOn?: 'hover' | 'click' | 'dblclick' | 'contextmenu' | 'manual';
    /** Only open the popup if there's no feature from a higher layer covering this one. */
    openIfTopMost?: boolean;
    focusAfterOpen?: boolean;
    anchor?: maplibregl.PositionAnchor;
    offset?: maplibregl.Offset;
    /** Classes to apply to the map's popup container */
    popupClass?: string;
    maxWidth?: string;
    /** Where to show the popup. */
    lngLat?: maplibregl.LngLatLike;
    /** If set and the slot is omitted, use this string as HTML to pass into the popup. */
    html?: string;
    /** Whether the popup is open or not. Can be set to manually open the popup at `lngLat`,
     * if openOn is not `hover`. */
    open?: boolean;
    children?:
      | Snippet<
          [
            {
              features: DATA[] | undefined;
              data: DATA | undefined;
              map: maplibregl.Map | undefined;
              close: () => void;
            },
          ]
        >
      | undefined;
    /** A callback which can return `false` if the popup should not open.
     * For example, the features for this popup may not contain any data for the popup. */
    canOpen?: ((features: DATA[] | undefined) => boolean) | undefined;
    onopen?: ((popup: maplibregl.Popup) => void) | undefined;
    onclose?: ((popup: maplibregl.Popup) => void) | undefined;
    onhover?: ((popup: maplibregl.Popup) => void) | undefined;
  };
  events(): {};
  slots(): {};
  bindings(): 'lngLat' | 'open';
  exports(): {};
}
interface $$IsomorphicComponent {
  new <DATA = Feature>(
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
  <DATA = Feature>(
    internal: unknown,
    props: ReturnType<__sveltets_Render<DATA>['props']> & {}
  ): ReturnType<__sveltets_Render<DATA>['exports']>;
  z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Popup: $$IsomorphicComponent;
type Popup<DATA = Feature> = InstanceType<typeof Popup<DATA>>;
export default Popup;
