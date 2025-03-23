import maplibregl from 'maplibre-gl';
declare const AttributionControl: import('svelte').Component<
  {
    position?: maplibregl.ControlPosition;
    compact?: boolean;
    customAttribution?: string | string[] | undefined;
  },
  {},
  ''
>;
type AttributionControl = ReturnType<typeof AttributionControl>;
export default AttributionControl;
