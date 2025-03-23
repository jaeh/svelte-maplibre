declare const Terrain: import('svelte').Component<
  {
    source?: string;
    exaggeration?: number;
  },
  {},
  ''
>;
type Terrain = ReturnType<typeof Terrain>;
export default Terrain;
