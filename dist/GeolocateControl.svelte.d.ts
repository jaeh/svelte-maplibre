import maplibregl from 'maplibre-gl';
declare const GeolocateControl: import('svelte').Component<
  {
    position?: maplibregl.ControlPosition;
    positionOptions?: PositionOptions | undefined;
    fitBoundsOptions?: maplibregl.FitBoundsOptions | undefined;
    trackUserLocation?: boolean;
    showAccuracyCircle?: boolean;
    showUserLocation?: boolean;
    control?: maplibregl.GeolocateControl;
  },
  {},
  'control'
>;
type GeolocateControl = ReturnType<typeof GeolocateControl>;
export default GeolocateControl;
