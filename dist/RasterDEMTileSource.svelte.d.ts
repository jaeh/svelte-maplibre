import type { Snippet } from 'svelte';
import type { DEMEncoding } from 'maplibre-gl';
declare const RasterDemTileSource: import('svelte').Component<
  {
    id?: string;
    tiles: string[];
    tileSize?: number | undefined;
    bounds?: [number, number, number, number];
    attribution?: string;
    minzoom?: number;
    maxzoom?: number;
    volatile?: boolean;
    encoding?: DEMEncoding;
    redFactor?: number;
    greenFactor?: number;
    blueFactor?: number;
    baseShift?: number;
    children?: Snippet;
  },
  {},
  ''
>;
type RasterDemTileSource = ReturnType<typeof RasterDemTileSource>;
export default RasterDemTileSource;
