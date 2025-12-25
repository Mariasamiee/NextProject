import { createSlice } from "@reduxjs/toolkit";
import { products , Product} from "@/pages/{core}/Arrays";

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
