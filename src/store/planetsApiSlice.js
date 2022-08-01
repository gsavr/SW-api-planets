import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.dev/api",
  }),
  endpoints(builder) {
    return {
      fetchPlanets: builder.query({
        query(page) {
          return `/planets/?page=${page}`;
        },
      }),
      fetchPlanetById: builder.query({
        query(id) {
          return `/planets/${id}`;
        },
      }),
      fetchFilmById: builder.query({
        query(id) {
          return `/films/${id}`;
        },
      }),
      fetchResidentById: builder.query({
        query(id) {
          return `/people/${id}`;
        },
      }),
    };
  },
});

export const {
  useFetchPlanetsQuery,
  useFetchPlanetByIdQuery,
  useFetchFilmByIdQuery,
  useFetchResidentByIdQuery,
} = apiSlice;
