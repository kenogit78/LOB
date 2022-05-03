import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postService from './postService';

const initialState = {
  post: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create post
export const createPost = createAsyncThunk(
  'post/create',
  async (postData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token;
      return await postService.createPost(postData);
    } catch (error) {
      const message =
        error.response?.data.message || error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.post.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
