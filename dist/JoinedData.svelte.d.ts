declare const JoinedData: import('svelte').Component<
  {
    data: Array<Record<string, string | number | undefined>>;
    idCol: string;
    sourceLayer?: string | undefined;
  },
  {},
  ''
>;
type JoinedData = ReturnType<typeof JoinedData>;
export default JoinedData;
