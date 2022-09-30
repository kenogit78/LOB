import { apiSlice } from '../auth/apiSlice';

// const apiWithTag = apiSlice.enhanceEndpoints({ tagTypes: ['Post'] });

export const postApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => '/api/post',
      providesTags: ['Post'],
      keepUnusedDataFor: 5,
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: '/api/post/new',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/api/post/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetPostQuery,
  deletePost,
  useAddNewPostMutation,
  useDeletePostMutation,
} = postApiSlice;
