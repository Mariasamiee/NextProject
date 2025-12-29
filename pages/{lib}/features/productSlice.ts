import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { products, Product } from "@/pages/{core}/Arrays"

interface ProductState {
  items: Product[]
  selectedCategory: string | null
}

const initialState: ProductState = {
  items: products,
  selectedCategory: null,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload
    },
    sortMostExpensive(state) {
      state.items = state.items.slice().sort((a, b) => b.price - a.price)
    },
    sortCheapest(state) {
      state.items = state.items.slice().sort((a, b) => a.price - b.price)
    },
    sortBestRating(state) {
      state.items = state.items.slice().sort((a, b) => b.rating - a.rating)
    },
    resetSort(state) {
      state.items = products
    },
  },
})

export const { setCategory, sortMostExpensive, sortCheapest, sortBestRating, resetSort } = productSlice.actions
export default productSlice.reducer
