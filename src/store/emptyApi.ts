// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

function getCookie(name: string): string {
  return document?.cookie?.split('; ').find(row => row.startsWith(name+"="))?.split('=')[1] || "";
}

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers: Headers) => {
      headers.set('X-CSRF-TOKEN', getCookie('csrf_access_token'));
      return headers;
    },
  }),
  endpoints: () => ({}),
})