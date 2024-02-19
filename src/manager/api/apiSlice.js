import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.myhome.az/api',
  }),
  endpoints: (builder) => ({
    fetchTags: builder.query({
      query: () => ({
        url: '/property-types',
        method: 'GET',
      }),
    }),
    buildTypes: builder.query({
      query: () => ({
        url: 'rental-client-types',
        method: 'GET',
      }),
    }),
    apartmanTypes: builder.query({
      query: () => ({
        url: '/apartment-types',
        method: 'GET',
      }),
    }),
    cityFetch: builder.query({
      query: () => ({
        url: '/cities',
        method: 'GET',
      }),
    }),
    regionFetch: builder.query({
      query: (cityId) => ({
        url: `/city/${cityId}/regions`,

        method: 'GET',
      }),
    }),
    villageFetch: builder.query({
      query: (districtId) => ({
        url: `/region/${districtId}/villages`,
        method: 'GET',
      }),
    }),

    submitData: builder.mutation({
      query: (allState) => ({
        url: 'announcement/store',
        method: 'POST',
        body: allState,
      }),
    }),
    fetchData: builder.query({
      query: () => ({
        url: '/announcement/list',
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useFetchTagsQuery,
  useBuildTypesQuery,
  useApartmanTypesQuery,
  useCityFetchQuery,
  useRegionFetchQuery,
  useVillageFetchQuery,
  useSubmitDataMutation,

  useFetchDataQuery,
} = apiSlice
