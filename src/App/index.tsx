import { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { DamageSelector } from '../components';
import { AppOptionsProvider } from '../context';
import { IAppProps } from './types';
import styles from './App.module.css';

const App: FC<IAppProps> = ({ options }) => {
  useEffect(() => {
    options?.options?.onInit?.();
  }, []);

  return (
    <AppOptionsProvider options={options}>
      <div className={styles['app']}>
        <div className={styles['app__container']}>
          <DamageSelector />
        </div>

        <ToastContainer />
      </div>
    </AppOptionsProvider>
  );
};

export default App;
