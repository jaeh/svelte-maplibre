import type { Snippet } from 'svelte';
import type { Scheme } from './types.js';
declare const RasterTileSource: import('svelte').Component<
  {
    id?: string;
    /** An array one or more tile source URLs pointing to the tiles.
     * Either `tiles` or `url` must be provided. */
    tiles?: string[];
    tileSize?: number;
    /** A single URL pointing to a PMTiles archive. Either `tiles` or `url` must be provided. */
    url?: string;
    bounds?: [number, number, number, number];
    scheme?: Scheme;
    attribution?: string;
    minzoom?: number;
    maxzoom?: number;
    volatile?: boolean;
    children?: Snippet;
  },
  {},
  ''
>;
type RasterTileSource = ReturnType<typeof RasterTileSource>;
export default RasterTileSource;
