import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TRep } from '../../../types';
const url = 'https://api.github.com/';

export const sliderSlice = createApi({
    reducerPath: 'git',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getRepositories: build.query<TRep[], string>({
            query: (name = '') =>
                `search/repositories?q=${encodeURIComponent(
                    name
                )}+stars:>10000&sort=stars&order=desc`,
            transformResponse: (response: { items: TRep[] }) => response.items,
        }),
    }),
});
export const { useGetRepositoriesQuery } = sliderSlice;
// https://api.github.com/search/repositories?q=javascript+stars:>10000&sort=stars&order=desc
