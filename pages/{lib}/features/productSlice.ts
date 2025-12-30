import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { products, Product } from "@/pages/{core}/Arrays"

interface CartItem {
  product: Product
  quantity: number
}

interface ProductState {
  items: Product[]
  selectedCategory: string | null
  cart: {
    items: CartItem[]
  }
}

const initialState: ProductState = {
  items: products,
  selectedCategory: null,
  cart: {
    items: [],
  },
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

    addToCart(state, action: PayloadAction<Product>) {
      const item = state.cart.items.find((i) => i.product.id === action.payload.id)

      if (item) {
        item.quantity += 1
      } else {
        state.cart.items.push({ product: action.payload, quantity: 1, })
      }
    },

increaseQty(state, action: PayloadAction<string>) {
  const item = state.cart.items.find((i) => i.product.id === action.payload)
  if (item) item.quantity += 1
},

decreaseQty(state, action: PayloadAction<string>) {
  const item = state.cart.items.find((i) => i.product.id === action.payload)
  if (!item) return

  if (item.quantity > 1) {
    item.quantity -= 1
  } else {
    state.cart.items = state.cart.items.filter((i) => i.product.id !== action.payload)
  }
},

removeFromCart(state, action: PayloadAction<string>) {
  state.cart.items = state.cart.items.filter((i) => i.product.id !== action.payload)
},


  },
})

export const { setCategory, sortMostExpensive, sortCheapest, sortBestRating, resetSort, addToCart, increaseQty, decreaseQty, removeFromCart, } = productSlice.actions;

export default productSlice.reducer;
