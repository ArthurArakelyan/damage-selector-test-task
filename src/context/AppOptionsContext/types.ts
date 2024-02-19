import { PropsWithChildren } from 'react';
import { IPluginOptions } from '../../types';

export interface IAppOptionsProviderProps extends PropsWithChildren {
  options: IPluginOptions;
}
