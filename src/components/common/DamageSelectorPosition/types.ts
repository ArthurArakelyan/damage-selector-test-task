import { IPosition } from '../../../types';

export interface IDamageSelectorPositionProps {
  position: IPosition;
  active: boolean;
  loading: boolean;
  onChange: (id: string) => any;
}
