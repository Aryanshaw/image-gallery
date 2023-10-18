import { createSlice } from "@reduxjs/toolkit";

const normalizeImageData = (dataArray) => {
  return dataArray.map((item) => {
    if (item.cover_photo) {
      return item.cover_photo;
    } else {
      return item;
    }
  });
};

const initialState = {
  loading: false,
  error: null,
  photoDetails: [],
  tags: [],
  searchText: "",
};

const fetchCollectionSlice = createSlice({
  name: "fetchCollection",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    isLoading(state, { payload }) {
      state.loading = payload;
    },
    getImageData(state, { payload }) {
      const normalizedData = normalizeImageData(payload);
      state.loading = false;
      state.photoDetails = normalizedData;
      state.tags = payload.map((item) => item.tags);
    },
    getImageDataError(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    getSearchText(state, { payload }) {
      state.searchText = payload;
    },
  },
});

export const {
  increment,
  decrement,
  isLoading,
  getImageData,
  getImageDataError,
  getSearchText,
} = fetchCollectionSlice.actions;

export const loadingSelector = (state) => state.fetchCollection.loading;
export const photoDetailsSelector = (state) =>
  state.fetchCollection.photoDetails;
export const tagSelector = (state) => state.fetchCollection.tags;
export const searchTextSelector = (state) => state.fetchCollection.searchText;
export default fetchCollectionSlice.reducer;
