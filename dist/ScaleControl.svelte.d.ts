import maplibregl from 'maplibre-gl';
declare const ScaleControl: import('svelte').Component<
  {
    position?: maplibregl.ControlPosition;
    maxWidth?: number | undefined;
    unit?: 'imperial' | 'metric' | 'nautical';
  },
  {},
  ''
>;
type ScaleControl = ReturnType<typeof ScaleControl>;
export default ScaleControl;
