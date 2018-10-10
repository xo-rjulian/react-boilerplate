import { createSelector } from 'reselect';

const base = (state: any) => state.storage;

export const getStorage = createSelector(base, storage => storage);
