import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const newProductApi = createApi({
    reducerPath: 'newProduct',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3060/'}),
    tagTypes: ['newProduct', 'admin', 'cart'],
    endpoints: (build)=>({
        getNewProduct: build.query({
            query: ()=> 'product',
            providesTags: (result) =>
            result
              ? [...result.map(({ id }) => ({ type: 'newProduct', id })),
              {type: 'newProduct', id: 'LIST'}
            ]
              : [{type: 'newProduct', id: 'LIST'}],
        }),
        getAdmin: build.query({
            query: ()=> 'admin',
            providesTags: (result) =>
            result
              ? [...result.map(({ id }) => ({ type: 'admin', id })),
              {type: 'admin', id: 'LIST'}
            ]
              : [{type: 'admin', id: 'LIST'}],
        }),
        getCart: build.query({
          query: ()=> 'cart',
          providesTags: (result) =>
          result
            ? [...result.map(({ id }) => ({ type: 'cart', id })),
            {type: 'cart', id: 'LIST'}
          ]
            : [{type: 'cart', id: 'LIST'}],
      }),
      
        addProd: build.mutation({
          query: (newProd) => ({
              url: 'product',
              method: 'POST',
              body: {
                  img: newProd.img,
                  value: newProd.value,
                  species: newProd.species,
                  gender: newProd.gender,
                  count: 1,
                  info: newProd.info
              },
          }),
          invalidatesTags: [{type: 'newProduct', id: 'LIST'}]
      }),
      addCart: build.mutation({
        query: (cart) => ({
            url: 'cart',
            method: 'POST',
            body: {
                img: cart.img,
                value: cart.value,
                species: cart.species,
                gender: cart.gender,
                count: 1,
                info: cart.info
            },
        }),
        invalidatesTags: [{type: 'cart', id: 'LIST'}]
    }),
      delProd: build.mutation({
        query: (id) => ({
            url: `product/${id}`,
            method: 'DELETE',
            
        }),
        invalidatesTags: [{type: 'newProduct', id: 'LIST'}]
    }),
    delCart: build.mutation({
      query: (id) => ({
          url: `cart/${id}`,
          method: 'DELETE',
          
      }),
      invalidatesTags: [{type: 'cart', id: 'LIST'}]
  }),
  checkCount: build.mutation({
    query: (body) => ({
        url: `cart/${body.id}`,
        method: 'PUT',
        body: {
         ...body
        }
    }),
    invalidatesTags: [{type: 'cart', id: 'LIST'}]
})
    })

})

export const {useGetNewProductQuery, useAddProdMutation, useDelProdMutation, useGetAdminQuery, useGetCartQuery, useDelCartMutation, useCheckCountMutation, useAddCartMutation} = newProductApi

export const newProductReducer = newProductApi.reducer