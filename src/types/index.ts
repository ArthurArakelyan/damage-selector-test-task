export interface IPluginOptions {
  selector?: string;
  options?: {
    initializedOptions?: string[];
    onPositionChange?: (positions: string[]) => any;
    onComplete?: (positions: string[]) => any;
    onInit?: () => any;
  };
}

export interface IPosition {
  id: string;
  vertical: VerticalPositionType;
  left?: string;
  right?: string;
}

export type VerticalPositionType = 'top' | 'center' | 'bottom';
