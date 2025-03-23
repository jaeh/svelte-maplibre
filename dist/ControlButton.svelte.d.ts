import type { Snippet } from 'svelte';
declare const ControlButton: import('svelte').Component<
  {
    /** True if this is an icon button. This will both enable the built-in MapLibre
     * icon button styling and center the element inside the button.
     * @default true since most map buttons are icons. */
    icon?: boolean;
    center?: boolean;
    title?: string;
    class?: string;
    children?: Snippet;
    onclick?: (e: MouseEvent) => void;
  },
  {},
  ''
>;
type ControlButton = ReturnType<typeof ControlButton>;
export default ControlButton;
