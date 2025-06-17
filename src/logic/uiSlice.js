// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        storeHeading: 'Plants',
        priceRange: [20, 45],
    },
    reducers: {
        setStoreHeading(state, action) {
            state.storeHeading = action.payload;
        },
        setPriceRange(state, action) {
            state.priceRange = action.payload;
        },
    },
});

export const { setStoreHeading, setPriceRange } = uiSlice.actions;
export default uiSlice.reducer;
