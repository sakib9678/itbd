import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://login.ibrahimtechbd.com", // Hardcoded base URL
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      // Do not set Content-Type for FormData
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCareerJobs: builder.query({
      query: () => "/api/career",
    }),
    getCircularDetails: builder.query({
      query: (id) => `/api/circular/details/${id}`,
    }),
    submitJob: builder.mutation({
      query: (jobData) => ({
        url: "/api/submit/job",
        method: "POST",
        body: jobData,
      }),
    }),
  }),
});

export const {
  useGetCareerJobsQuery,
  useGetCircularDetailsQuery,
  useSubmitJobMutation,
} = apiSlice;
