// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import authReducer from './auth/authSlice';
// // import postReducer from './post/postSlice';
// import { apiSlice } from './auth/apiSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer,

//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { apiSlice } from './auth/apiSlice';
import authReducer from './auth/authSlice';
import { pApiSlice } from './post/pApiSlice';
import postReducer from './post/postSlice';

const combinedReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload,
      [apiSlice.reducerPath]: apiSlice.reducer,
      //       // postReducer: {
      //       //   users: [...action.payload.users.users, ...state.users.users],
      //       // },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

export const wrapper = createWrapper(makeStore, { debug: true });
