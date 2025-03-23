import maplibregl from 'maplibre-gl';
declare const FullscreenControl: import('svelte').Component<
  {
    position?: maplibregl.ControlPosition;
    container?: HTMLElement | string | undefined;
  },
  {},
  ''
>;
type FullscreenControl = ReturnType<typeof FullscreenControl>;
export default FullscreenControl;
