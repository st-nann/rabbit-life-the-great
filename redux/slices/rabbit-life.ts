import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Faqs, Lists, Product } from "@/types/product"
import { fetchProducts } from "@/redux/api/rabbit-life"
import get from "lodash/get"
import isEmpty from "lodash/isEmpty"
import isNull from "lodash/isNull"
import concat from "lodash/concat"
import uniqBy from "lodash/uniqBy"

type InitialStateProp = {
    loading: boolean,
    data: Lists | null,
    faqs: Faqs[] | null,
    error: any,
}

const initialState: InitialStateProp = {
    loading: false,
    data: null,
    faqs: null,
    error: null
}

const rabbitLifeSlice = createSlice({
  name: "rabbitLifeSlice",
  initialState,
  reducers: {
    faq: (state, action: PayloadAction<Lists>) => {
      const products = get(action, "payload.products", [])
      let faqs: Faqs[] = []
      products.map((v: Product) => {
        const faqLists = get(v, "faqs")
        if (!(isEmpty(faqLists) || isNull(faqLists)) && faqs) {
          faqs = concat(faqs, faqLists)
        }
      })
      state.faqs = uniqBy(faqs, "faq_id")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Lists>) => {
        const payload = action.payload
        state.data = payload
        state.loading = false
        rabbitLifeSlice.caseReducers.faq(state, action)
      })
      .addCase(fetchProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action
      })
  },
})

export default rabbitLifeSlice.reducer