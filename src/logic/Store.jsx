import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

/* async thunk */
export const fetchData = createAsyncThunk('shop/fetchData', async (_, { rejectWithValue }) => {
    try {
        const res = await fetch(import.meta.env.BASE_URL + '/PlantsData.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        return Array.isArray(json) ? json.map(({ Heding, product }) => ({ Heding, product })) : [];
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

const initialState = {
    cart: [],
    productView: null,
    loading: false,
    error: null,
    products: [],
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        CartAdd(state, { payload }) {
            const existing = state.cart.find(i => i.id === payload.id);
            if (existing) existing.quantity += payload.quantity ?? 1;
            else state.cart.push({ ...payload, quantity: payload.quantity ?? 1 });
        },
        removeCartItem(state, { payload }) {
            state.cart = state.cart.filter(i => i.id !== payload);
        },
        updateCartItemQuantity(state, { payload }) {
            const item = state.cart.find(i => i.id === payload.id);
            if (item && payload.quantity >= 1) item.quantity = payload.quantity;
        },
        CartDescription(state, { payload }) {
            state.productView = { ...payload, quantity: 1 };
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, state => { state.loading = true; state.error = null; })
            .addCase(fetchData.fulfilled, (state, { payload }) => { state.loading = false; state.products = payload; })
            .addCase(fetchData.rejected, (state, { payload }) => { state.loading = false; state.error = payload; });
    },
});

export const { CartAdd, removeCartItem, updateCartItemQuantity, CartDescription } = shopSlice.actions;

export const store = configureStore({
    reducer: { shop: shopSlice.reducer, ui: uiReducer },
});

/* selectors */
export const selectTotalPrice = s => s.shop.cart.reduce((t, i) => t + i.price * i.quantity, 0);
export const selectTotalItems = s => s.shop.cart.reduce((t, i) => t + i.quantity, 0);
