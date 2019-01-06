import { createReducer } from '@redux-ts-starter-kit/core';
export default createReducer({
  initialState: 0,
  cases: {
    INCREMENT: state => state + 1,
    DECREMENT: state => state - 1,
  },
});
