// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import { productsApi } from './services/productsApi'

const LOCAL_STORAGE_KEY = 'ebac_sports_cart_v1'

function loadState() {
  try {
    if (typeof localStorage === 'undefined') return undefined
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!raw) return undefined
    // stored object is the cart slice itself
    const parsed = JSON.parse(raw)
    return { cart: parsed }
  } catch {
    return undefined
  }
}

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  preloadedState,
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.cart))
  } catch {
    // ignore write errors
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
