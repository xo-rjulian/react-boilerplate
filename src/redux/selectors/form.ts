import { createSelector } from 'reselect';

const base = (state: any) => state.form;

export const getForm = createSelector(base, form => form);
