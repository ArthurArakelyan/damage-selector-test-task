import { useEffect, useRef, useState } from 'react';
import { useUnit } from 'effector-react';
import { DamageSelectorPosition } from '../../../components';
import { useAppOptions } from '../../../context';
import { $positions, getPositionsFx, positionsChanged, changePositionsFx } from '../../../model';
import { positions } from '../../../constants';

const DamageSelectorPositions = () => {
  const [
    { positions: activePositions },
    handleChangePositions,
  ] = useUnit([$positions, positionsChanged]);

  const currentPositions = useRef<string[]>(activePositions);

  const [loadingPositions, setLoadingPositions] = useState<string[]>([]);

  const { options } = useAppOptions();

  const handleChange = async (id: string) => {
    try {
      const positions = currentPositions.current.includes(id)
        ? currentPositions.current.filter((position) => position !== id)
        : [...currentPositions.current, id];

      options?.onPositionChange?.(positions);

      currentPositions.current = positions;

      setLoadingPositions((prevState) => [...prevState, id]);

      const response = await changePositionsFx(positions);

      options?.onComplete?.(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingPositions((prevState) => prevState.filter((position) => position !== id));
    }
  };

  useEffect(() => {
    if (options?.initializedOptions) {
      handleChangePositions(options.initializedOptions);
    }

    getPositionsFx();
  }, []);

  useEffect(() => {
    if (loadingPositions.length === 0) {
      currentPositions.current = activePositions;
    }
  }, [activePositions]);

  return (
    <>
      {positions.map((position) => {
        return (
          <DamageSelectorPosition
            key={position.id}
            position={position}
            active={activePositions.includes(position.id)}
            loading={loadingPositions.includes(position.id)}
            onChange={handleChange}
          />
        );
      })}
    </>
  );
};

export default DamageSelectorPositions;
