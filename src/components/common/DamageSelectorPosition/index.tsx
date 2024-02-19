import { FC } from 'react';
import { IDamageSelectorPositionProps } from './types';
import styles from './DamageSelectorPosition.module.css';

const DamageSelectorPosition: FC<IDamageSelectorPositionProps> = ({ position, active, loading, onChange }) => {
  const handleClick = () => {
    onChange(position.id);
  };

  return (
    <button
      role="checkbox"
      aria-checked={active}
      title={position.id}
      disabled={loading}
      className={`${styles['damage-selector-position']} ${styles[`damage-selector-position--vertical-${position.vertical}`]} ${active ? styles['damage-selector-position--active'] : ''}`}
      style={{ left: position.left, right: position.right }}
      onClick={handleClick}
    ></button>
  );
};

export default DamageSelectorPosition;
