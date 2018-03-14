import { FILTER_ALL, FILTER_COMPLETED, FILTER_NOTCOMPLETED } from './actiontypes';
import * as filterType from '../../filterType';

export default (state = '', action) => {
  switch (action.type) {
    case FILTER_ALL:
      return filterType.FILTER_ALL;

    case FILTER_COMPLETED:

    return filterType.FILTER_COMPLETED;

    case FILTER_NOTCOMPLETED:

      return filterType.FILTER_NOTCOMPLETED;

    default:
      return state;
    }
  }