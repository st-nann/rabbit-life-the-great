import { configureStore } from "@reduxjs/toolkit"
import rabbitLifeSlice from "@/redux/slices/rabbit-life"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    rabbitLifeSlice
  }
})

export default store