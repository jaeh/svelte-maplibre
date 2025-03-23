import type { Snippet } from 'svelte';
import type { Coordinates } from 'maplibre-gl';
declare const ImageSource: import('svelte').Component<
  {
    id?: string;
    url: string;
    coordinates: Coordinates;
    children?: Snippet;
  },
  {},
  ''
>;
type ImageSource = ReturnType<typeof ImageSource>;
export default ImageSource;
