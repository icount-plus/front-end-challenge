import { configureStore, combineReducers } from '@reduxjs/toolkit';

import themeReducers from './reducers/theme.reducers';

export type AppState = {
  theme: string;
};

const reducer = combineReducers<AppState>({
  theme: themeReducers,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
