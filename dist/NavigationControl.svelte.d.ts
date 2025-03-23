import maplibregl from 'maplibre-gl';
declare const NavigationControl: import('svelte').Component<
  {
    position?: maplibregl.ControlPosition;
    showCompass?: boolean;
    showZoom?: boolean;
    visualizePitch?: boolean;
  },
  {},
  ''
>;
type NavigationControl = ReturnType<typeof NavigationControl>;
export default NavigationControl;
