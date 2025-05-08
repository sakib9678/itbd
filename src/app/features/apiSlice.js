import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://login.ibrahimtechbd.com",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
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
    registerAffiliate: builder.mutation({
      query: (userData) => ({
        url: "/api/affiliate/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginAffiliate: builder.mutation({
      query: (credentials) => ({
        url: "/api/affiliate/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getAffiliateDashboard: builder.query({
      query: () => ({
        url: "/api/affiliate/dashboard",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
        },
      }),
    }),

    
    getAffiliateTransiction: builder.query({
      query: () => ({
        url: "/api/affiliate/transaction",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
        },
      }),
    }),
    updateAffiliateProfile: builder.mutation({
      query: (formData) => ({
        url: "/api/affiliate/profile/update",
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("affiliateToken")}`,
          'Content-Type': undefined,
        },
        formData: true,
      }),
      invalidatesTags: ['Profile', 'Dashboard'],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Refetch dashboard data after successful update
          dispatch(apiSlice.util.invalidateTags(['Dashboard']));
        } catch (error) {
          console.error('Update failed:', error);
        }
      },
    }),
  }),
});

export const {
  useGetCareerJobsQuery,
  useGetCircularDetailsQuery,
  useSubmitJobMutation,
  useRegisterAffiliateMutation,
  useLoginAffiliateMutation,
  useGetAffiliateDashboardQuery,
  useGetAffiliateTransictionQuery,
  useUpdateAffiliateProfileMutation
} = apiSlice;
