import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: number
  name: string
  price:number
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => 'products'
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
