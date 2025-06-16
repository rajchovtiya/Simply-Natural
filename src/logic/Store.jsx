import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
export const fetchData = createAsyncThunk(
    'Cart/fetchData',
    async () => {
        const response = await fetch('/PlantsData.json');
        if (!response.ok) throw new Error(`Could not load PlantsData.json (status ${response.status})`);
        const data = await response.json();
        return data.map(item => ({
            Heding: item.Heding,
            product: item.product
        }));
    }
);

const initialState = {
    cart: [],
    productView: null,
    loading: false,
    products: [],
};

const StoreRedux = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        CartAdd(state, action) {
            const item = action.payload;
            const existing = state.cart.find(x => x.id === item.id);
            if (existing) {
                existing.quantity = item.quantity || 1;
            } else {
                state.cart.push({ ...item, quantity: item.quantity || 1 });
            }
        },



        CartDescription(state, action) {
            const item = action.payload;
            state.productView = { ...item, quantity: 1 };
        },

        removeCartItem(state, action) {
            const idToRemove = action.payload.id;
            state.cart = state.cart.filter(x => x.id !== idToRemove);
        },

        updateCartItemQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.cart.find(x => x.id === id);
            if (item && quantity >= 1) {
                item.quantity = quantity;
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, state => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchData.rejected, state => {
                state.loading = false;
            });
    }
});

export const { CartAdd, removeCartItem, updateCartItemQuantity, CartDescription } = StoreRedux.actions;

export const store = configureStore({
    reducer: {
        shop: StoreRedux.reducer,
        ui: uiReducer,

    },

});

export const selectTotalPrice = (state) =>
    state.shop.cart.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectTotalItems = (state) =>
    state.shop.cart.reduce((total, item) => total + item.quantity, 0);

// store.dispatch(CartAdd({ id: 1, title: "dksdjqhaksd" }))
// store.dispatch(CartAdd({ id: 2, title: "dkseqwedqwjhaksd" }))
// store.dispatch(CartAdd({ id: 3, title: "dksdjhwewqeaksd" }))
//  store.dispatch(CartDescription({ id: 4, title: "dksdqwejhaksd" }))
//  console.log(store.getState())
// store.dispatch(fetchData()).then(action => {
//     console.log(action.payload)
// });