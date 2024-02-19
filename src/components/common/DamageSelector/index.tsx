import { useUnit } from 'effector-react';
import { toast } from 'react-toastify';
import { DamageSelectorPositions } from '../../../components';
import { $positions } from '../../../model';
import styles from './DamageSelector.module.css';

const DamageSelector = () => {
  const [
    {
      error: {
        getPositionsFx: getPositionsError,
        changePositionsFx: changePositionsError,
      },
    },
  ] = useUnit([$positions]);

  const handleClick = () => {
    toast.success('Data is sent', {
      hideProgressBar: true,
    });
  };

  return (
    <div className={styles['damage-selector']}>
      <div className={styles['damage-selector__positions']}>
        <DamageSelectorPositions />

        {/* Loading image from an independent resource, to make sure that the plugin will work with any website without need of a local image file to be used with plugin files */}
        <img
          src="https://damage-selector-test-task.vercel.app/car.png"
          alt="Car"
          width={463}
          height={202}
          className={styles['damage-selector__positions-image']}
        />
      </div>

      {getPositionsError && (
        <p className={`${styles['damage-selector__message']} ${styles['damage-selector__message--error']}`}>
          {getPositionsError}
        </p>
      )}

      {changePositionsError && (
        <p className={`${styles['damage-selector__message']} ${styles['damage-selector__message--error']}`}>
          {changePositionsError}
        </p>
      )}

      <button
        className={styles['damage-selector__button']}
        onClick={handleClick}
      >
        Rapporto danni
      </button>
    </div>
  );
};

export default DamageSelector;
