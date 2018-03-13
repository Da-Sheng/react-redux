import { FILTER_ALL, FILTER_COMPLETED, FILTER_NOTCOMPLETED } from './actiontypes';

export const filterAll = () => ({
  type: FILTER_ALL,
});

export const filterCompleted = () => ({
  type: FILTER_COMPLETED,
});

export const filterNotCompleted = () => ({
  type: FILTER_NOTCOMPLETED,
});