import _ from 'lodash';
import { READ_EVENTS, DELETE_EVENT } from '../actions';

export default (event = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    case DELETE_EVENT:
      delete event[action.id];
      return { ...event };
    default:
      return event;
  }
};
