import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
// Get user from localStorage

typeof window !== 'undefined' && window.localStorage;

const user = JSON.parse(
  typeof window !== 'undefined' && window.localStorage.getItem('user')
);

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Signup user
export const signup = createAsyncThunk(
  'auth/signup',
  async (user, thunkApi) => {
    try {
      return await authService.signup(user);
    } catch (error) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

// SignIn user
export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      error.response.data.message || error.message || error.toString();
    return thunkApi.rejectWithValue(message);
  }
});

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
