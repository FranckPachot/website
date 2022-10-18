export const versions: Version[] = [].sort((a, b) => {
  return b.releaseDate.getTime() - a.releaseDate.getTime();
});

export type Version = {
  name: string;
  releaseDate: Date;
};
