import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //   // Attach auth tokens here when available
    //   return headers;
    // },
  }),
  tagTypes: ['Health'],
  endpoints: () => ({}),
});