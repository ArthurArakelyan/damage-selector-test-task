import { createContext, FC, useContext } from 'react'
import { IAppOptionsProviderProps } from './types';
import { IPluginOptions } from '../../types';

export const AppOptionsContext = createContext<IPluginOptions>({});

export const useAppOptions = () => useContext(AppOptionsContext);

export const AppOptionsProvider: FC<IAppOptionsProviderProps> = ({ options, children }) => {
  return (
    <AppOptionsContext.Provider value={options}>{children}</AppOptionsContext.Provider>
  );
};
