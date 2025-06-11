// import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//  export const fetchData = createAsyncThunk(
//      'shop/fetchData',
//      async () => {
//          const response = await fetch('/cartData.json');
//          if (!response.ok) throw new Error(`Could not load cartData.json (status ${response.status})`);
//          const data = await response.json();
//          return data.map(item => ({
//              id: item.id,
//              title: item.title,
//              img: item.img,
//              price: item.price,
//          }));
//      }
//  );
// const initialState = {
//     cart: [],
// };

// const shopSlice = createSlice({
//     name: 'shop',
//     initialState,
//     reducers: {
//         CartAdd(state, action) {
//             const item = action.payload;
//             const existing = state.cart.find(x => x.id === item.id);
//             if (existing) {
//                 existing.quantity += 1;
//             } else {
//                 state.cart.push({ ...item, quantity: 1 });
//             }
//         },
//         removeCartItem(state, action) {
//             const idToRemove = action.payload.id;
//             state.cart = state.cart.filter(x => x.id !== idToRemove);
//         }
//     },
//     extraReducers: builder => {
//         builder
//             .addCase(fetchData.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.products = action.payload;
//             })
//     }
// });

// export const { CartAdd, removeCartItem } = shopSlice.actions;

// export const store = configureStore({
//     reducer: {
//         shop: shopSlice.reducer
//     }
// });

import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const fetchData = createAsyncThunk(
    'Cart/fetchData', async () => {
        const response = await fetch('/PlantsData.json');
        if (!response.ok) throw new Error(`Could not load cartData.json (status ${response.status})`);
        const data = await response.json();
        return data.map(item => ({
            Heding: item.Heding,
            product: item.product
        }
        ))
    }
)
const initialState = {
    cart: []
}
const StoreRedux = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        CartAdd(state, action) {
            const item = action.payload;
            const existing = state.cart.find(x => x.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cart.push({ ...item, quantity: 1 });
            }
        },
        removeCartItem(state, action) {
            const idToRemove = action.payload.id;
            state.cart = state.cart.filter(x => x.id !== idToRemove);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
    }

})
export const { CartAdd, removeCartItem } = StoreRedux.actions;


export const store = configureStore({
    reducer: {
        shop: StoreRedux.reducer
    }
});

// store.dispatch(CartAdd({ id: 1, title: "dksdjqhaksd" }))
// store.dispatch(CartAdd({ id: 2, title: "dkseqwedqwjhaksd" }))
// store.dispatch(CartAdd({ id: 3, title: "dksdjhwewqeaksd" }))
// store.dispatch(CartAdd({ id: 4, title: "dksdqwejhaksd" }))
// console.log(store.getState())
// store.dispatch(fetchData()).then(action => {
//     console.log(action.payload)
// });