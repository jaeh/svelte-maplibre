import type { Snippet } from 'svelte';
import type { Scheme } from './types.js';
declare const VectorTileSource: import('svelte').Component<
  {
    id?: string;
    url?: string;
    tiles?: string[];
    promoteId?: string;
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
type VectorTileSource = ReturnType<typeof VectorTileSource>;
export default VectorTileSource;
