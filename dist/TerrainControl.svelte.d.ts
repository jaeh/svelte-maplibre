import maplibregl from 'maplibre-gl';
declare const TerrainControl: import('svelte').Component<
  {
    position?: maplibregl.ControlPosition;
    source: string;
    exaggeration: number;
  },
  {},
  ''
>;
type TerrainControl = ReturnType<typeof TerrainControl>;
export default TerrainControl;
