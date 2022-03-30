
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3916ae7048mshdc3db86295f2b4ap1db5f1jsnd40a9cecad7d'
}



const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl:'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),

        getCryptoHistory: builder.query({
            query: (coinUuid, timeperiod) => createRequest(`/coin/${coinUuid}/history?timeperiod=${timeperiod}`)
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;