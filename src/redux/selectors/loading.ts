import { createSelector } from 'reselect';

const base = (state: any) => state.loading;

export const getLoading = createSelector(base, loading => loading);
