import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const rabbitLifeEndpoint = process.env.NEXT_PUBLIC_RABBIT_LIFE_ENDPOINT as string

export const fetchProducts = createAsyncThunk('api/fetchProducts', async (data: { [key: string]: any } = {}) => {
  try {
    const response = await axios.post(`${rabbitLifeEndpoint}/api/product/list`, data)
    return response.data
  } catch (err) {
    console.error(err)
  }
})
