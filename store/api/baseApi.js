import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//GAMES_LAST_30_DAYS
const today = new Date();
const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
const thirtyDays = new Date(today.setDate(today.getDate() - 30));
const thirtyDaysAgoWithZeroDay =
  thirtyDays.getDate() < 10 ? '0' + thirtyDays.getDate() : thirtyDays.getDate();
const thirtyDaysAgoMonthWithZeroDay =
  thirtyDays.getMonth() < 10
    ? '0' + (thirtyDays.getMonth() + 1)
    : thirtyDays.getMonth() + 1;
const thirtyDaysAgo = `${thirtyDays.getFullYear()}-${thirtyDaysAgoMonthWithZeroDay}-${thirtyDaysAgoWithZeroDay}`;
const todaysDateMonthWithZero =
  today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
const todaysDate = `${today.getFullYear()}-${todaysDateMonthWithZero}-${day}`;

//GAMES_THIS_WEEK
const first = new Date().getDate() - new Date().getDay() + 1; // First day is the day of the month - the day of the week
const last = first + 6; // last day is the first day + 6
const getFirstday = new Date(new Date().setDate(first));
const getLastday = new Date(new Date().setDate(last));
const getFirstDayWithZero =
  getFirstday.getDate() < 10
    ? '0' + getFirstday.getDate()
    : getFirstday.getDate();
const getLastdayWithZero =
  getLastday.getDate() < 10 ? '0' + getLastday.getDate() : getLastday.getDate();
const getFirstMonthWithZero =
  getFirstday.getMonth() < 9
    ? '0' + (getFirstday.getMonth() + 1)
    : getFirstday.getMonth() + 1;
const getLastMonthWithZero =
  getLastday.getMonth() < 9
    ? '0' + (getLastday.getMonth() + 1)
    : getLastday.getMonth() + 1;
const firstDayThisWeek = `${getFirstday.getFullYear()}-${getFirstMonthWithZero}-${getFirstDayWithZero}`;
const lastDayThisWeek = `${getLastday.getFullYear()}-${getLastMonthWithZero}-${getLastdayWithZero}`;

//GAMES_NEXT_WEEK
const date = new Date();
//const getNextMonday = date.getDate() + (1 + 7 - date.getDay()) % 7;
const getNextMonday = date.getDate() + (7 - date.getDay() + 1);
//const getNextSunday = date.getDate() + (1 + 7 - date.getDay() + 6);
const getNextSunday = date.getDate() + (7 - date.getDay() + 7);
const mondayDate = new Date(date.setDate(getNextMonday));
const sundayDate = new Date(date.setDate(getNextSunday));
const mondayDateWithZero =
  mondayDate.getDate() < 10 ? '0' + mondayDate.getDate() : mondayDate.getDate();
const sundayDateWithZero =
  sundayDate.getDate() < 10 ? '0' + sundayDate.getDate() : sundayDate.getDate();

const mondayMonthDateWithZero =
  mondayDate.getMonth() < 9
    ? '0' + (mondayDate.getMonth() + 1)
    : mondayDate.getMonth() + 1;
const sundayMonthDateWithZero =
  sundayDate.getMonth() < 9
    ? '0' + (sundayDate.getMonth() + 1)
    : sundayDate.getMonth() + 1;

const mondayNextWeek = `${mondayDate.getFullYear()}-${mondayMonthDateWithZero}-${mondayDateWithZero}`;
const sundayNextWeek = `${sundayDate.getFullYear()}-${sundayMonthDateWithZero}-${sundayDateWithZero}`;
//console.log(sundayDate.getMonth() + 1);
//console.log(mondayDateWithZero, mondayNextWeek, sundayDateWithZero, sundayNextWeek);

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.rawg.io/api`,
  }),
  endpoints: (builder) => ({
    getBestOfTheYear: builder.query({
      query: (page) =>
        `games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=2023-01-01,2023-12-31&ordering=-added&page=${page}`,
    }),
    getPopularIn2022: builder.query({
      query: (page) =>
        `games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=2022-01-01,2022-12-31&ordering=-added&page=${page}`,
    }),
    getPopularIn2021: builder.query({
      query: (page) =>
        `games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=2021-01-01,2021-12-31&ordering=-added&page=${page}`,
    }),
    getPopularIn2020: builder.query({
      query: (page) =>
        `games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=2020-01-01,2020-12-31&page=${page}`,
    }),
    getPopularIn2019: builder.query({
      query: (page) =>
        `games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=2019-01-01,2019-12-31&page=${page}`,
    }),
    getAllTimePopular: builder.query({
      query: (page) =>
        `games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=1960-01-01,2021-12-31&page=${page}`,
    }),
    getLast30Days: builder.query({
      query: (page) =>
        //`games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=${thirtyDaysAgo},${todaysDate}&page=${page}`,
        `games/lists/recent-games-past?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
    }),
    getThisWeek: builder.query({
      query: (page) =>
        //`games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=${firstDayThisWeek},${lastDayThisWeek}&page=${page}`,
        `games/lists/recent-games?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
    }),
    getNextWeek: builder.query({
      query: (page) =>
        //`games?key=${process.env.NEXT_PUBLIC_API_KEY}&dates=${mondayNextWeek},${sundayNextWeek}&page=${page}`,
        `games/lists/recent-games-future?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
    }),
    getPlatforms: builder.query({
      query: (page) =>
        `platforms?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=28&page=${page}`,
    }),
    getStores: builder.query({
      query: (page) =>
        `stores?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=20&page=${page}`,
    }),
    getGenres: builder.query({
      query: (page) =>
        `genres?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=20&page=${page}`,
    }),
    getCollections: builder.query({
      query: (page) =>
        `collections?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=20&page=${page}`,
    }),
    getCreators: builder.query({
      query: (page) =>
        `creators?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=20&page=${page}`,
    }),
    getTags: builder.query({
      query: (page) =>
        `tags?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=20&page=${page}`,
    }),
    getDevelopers: builder.query({
      query: (page) =>
        `developers?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=20&page=${page}`,
    }),
    getPublishers: builder.query({
      query: (page) =>
        `publishers?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=20&page=${page}`,
    }),

    // getAllPlatforms1: builder.query({
    //   query: () => `platforms?key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`,
    // }),
    // getAllPlatforms2: builder.query({
    //   query: () => `platforms?key=${process.env.NEXT_PUBLIC_API_KEY}&page=2`,
    // }),
    getPlatformDetails: builder.query({
      query: (slug) =>
        `platforms/${slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getPlatformData: builder.query({
      query: ({ platformId, page }) =>
        `games?key=${process.env.NEXT_PUBLIC_API_KEY}&platforms=${platformId}&page=${page}`,
    }),
  }),
});

export const {
  useGetBestOfTheYearQuery,
  useGetPopularIn2022Query,
  useGetPopularIn2021Query,
  useGetPopularIn2020Query,
  useGetPopularIn2019Query,
  useGetAllTimePopularQuery,
  useGetLast30DaysQuery,
  useGetThisWeekQuery,
  useGetNextWeekQuery,
  useGetPlatformsQuery,
  useGetStoresQuery,
  useGetGenresQuery,
  useGetCollectionsQuery,
  useGetCreatorsQuery,
  useGetTagsQuery,
  useGetDevelopersQuery,
  useGetPublishersQuery,

  // useGetAllPlatforms1Query,
  // useGetAllPlatforms2Query,
  useGetPlatformDetailsQuery,
  useGetPlatformDataQuery,
} = baseApi;

// PLATFORMS

// SEARCH
export const searchAction = (query) => {
  return async (dispatch) => {
    try {
      //`https://api.rawg.io/api/games?search=${query}&key=${process.env.NEXT_PUBLIC_API_KEY}`
      //`https://api.rawg.io/api/games?search=${query}&search_precise=true&key=${process.env.NEXT_PUBLIC_API_KEY}`
      const SEARCH_RESULTS = `https://api.rawg.io/api/games?search=${query}&key=${process.env.NEXT_PUBLIC_API_KEY}`;
      let promise = await fetch(SEARCH_RESULTS);
      let result = await promise.json();
      dispatch({
        type: 'FETCH_SEARCH_RESULTS',
        payload: result.results,
        totalPages: Math.floor(result.count / 20),
        isSearchLoaded: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
