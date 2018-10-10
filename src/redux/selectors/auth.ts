import { pathOr } from 'ramda';
import { createSelector } from 'reselect';
import { getForm } from './form';

export const base = (state: any) => state.auth;
export const getAuth = createSelector(base, auth => auth);
export const getLoginForm = createSelector(
  getForm,
  form =>
    pathOr({}, ['login', 'values'], form) ||
    pathOr({}, ['login', 'registeredFields'], form)
);
