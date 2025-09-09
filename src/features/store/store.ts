import { configureStore } from '@reduxjs/toolkit';
import { sliderSlice } from '../../widjets/ui/Slider/sliderSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [sliderSlice.reducerPath]: sliderSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sliderSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
