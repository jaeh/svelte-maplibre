import type { Snippet } from 'svelte';
import type { GeoJSON } from 'geojson';
import type { ClusterOptions } from './types.js';
import type { ExpressionSpecification } from 'maplibre-gl';
declare const GeoJson: import('svelte').Component<
  {
    id?: string;
    data: GeoJSON | string;
    /** Generate a unique id for each feature. This will overwrite existing IDs. */
    generateId?: boolean;
    /** Use this property on the feature as the ID. This will overwrite existing IDs. */
    promoteId?: string | undefined;
    filter?: ExpressionSpecification | undefined;
    /** True to calculate line lengths. Required to use a line layer that
     * uses the "line-gradient" paint property. */
    lineMetrics?: boolean | undefined;
    cluster?: ClusterOptions | undefined;
    maxzoom?: number | undefined;
    attribution?: string | undefined;
    buffer?: number | undefined;
    tolerance?: number | undefined;
    children?: Snippet;
  },
  {},
  ''
>;
type GeoJson = ReturnType<typeof GeoJson>;
export default GeoJson;
