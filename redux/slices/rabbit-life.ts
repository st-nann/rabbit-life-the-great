import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Faqs, Lists, Product } from "@/types/product"
import { fetchProducts } from "@/redux/api/rabbit-life"
import get from "lodash/get"
import isEmpty from "lodash/isEmpty"
import isNull from "lodash/isNull"
import concat from "lodash/concat"
import uniqBy from "lodash/uniqBy"
import filter from "lodash/filter"
import includes from "lodash/includes"

type InitialStateProp = {
    loading: boolean,
    data: Lists | null,
    faqs: Faqs[] | null,
    detail: Product | null | undefined,
    suggestions: Product[] | null | undefined,
    error: any,
}

const initialState: InitialStateProp = {
    loading: false,
    data: null,
    faqs: null,
    detail: null,
    suggestions: null,
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
    },
    suggestions: (state, action: PayloadAction<Lists>) => {
      const specificSuggestions = process.env.NEXT_PUBLIC_PRODUCT_SUGGESTION
      const specificSuggestionArr = specificSuggestions?.split(',')
      const products = get(action, "payload.products", [])
      const suggestions = filter(products, (v: Product) => includes(specificSuggestionArr, v.product_id.toString()))
      state.suggestions = suggestions
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
        rabbitLifeSlice.caseReducers.suggestions(state, action)
      })
      .addCase(fetchProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action
      })
  },
})

export default rabbitLifeSlice.reducer