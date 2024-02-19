import { createStore, createEffect, createEvent } from 'effector';
import { request } from '../../utilities';
import { defaultErrorMessage } from '../../constants';
import { IPositionsState } from './types';

export const getPositionsFx = createEffect({
  handler: async () => {
    const response = await request('GET', 'b944ff');

    if (!Array.isArray(response)) {
      throw new Error(response?.message || defaultErrorMessage);
    }

    return response;
  },
});

export const changePositionsFx = createEffect({
  handler: async (positions: string[]) => {
    const response = await request('POST', 'b944ff', positions);

    if (!Array.isArray(response)) {
      throw new Error(response?.message || defaultErrorMessage);
    }

    return response;
  },
});

export const $positions = createStore<IPositionsState>({
  positions: [],
  error: {
    getPositionsFx: null,
    changePositionsFx: null,
  },
})
  .on(getPositionsFx.done, (state, { result }) => ({
    ...state,
    positions: result,
    error: {
      ...state.error,
      getPositionsFx: null,
    },
  }))
  .on(changePositionsFx.done, (state, { result }) => ({
    ...state,
    positions: result,
    error: {
      ...state.error,
      changePositionsFx: null,
    },
  }))
  .on(getPositionsFx.fail, (state, { error }) => ({
    ...state,
    error: {
      ...state.error,
      getPositionsFx: error.message,
    },
  }))
  .on(changePositionsFx.fail, (state, { error }) => ({
    ...state,
    error: {
      ...state.error,
      changePositionsFx: error.message,
    },
  }));

export const positionsChanged = createEvent<string[]>();

$positions.on(positionsChanged, (state, positions) => ({
  ...state,
  positions,
}));
