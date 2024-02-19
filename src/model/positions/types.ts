export interface IPositionsState {
  positions: string[];
  error: {
    getPositionsFx: string | null;
    changePositionsFx: string | null;
  };
}
