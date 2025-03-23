import type { Snippet } from 'svelte';
import type maplibregl from 'maplibre-gl';
declare const Control: import('svelte').Component<
  {
    defaultStyling?: boolean;
    position?: maplibregl.ControlPosition;
    class?: string | undefined;
    children?: Snippet;
  },
  {},
  ''
>;
type Control = ReturnType<typeof Control>;
export default Control;
