import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) =>({
        getAllPost: builder.query({
            query: ()=>{
                return {
                    url: 'posts',
                    method:'GET',
                }
            }
        }),
        getPostById: builder.query({
            query: (id)=>{
                return {
                    url: `posts/${id}`,
                    method:'GET',
                }
            }
        }),
        getPostByLimit: builder.query({
            query: (num)=>{
                return {
                    url: `posts?_limit=${num}`,
                    method:'GET',
                }
            }
        }),
        deletePost: builder.mutation({
            query: (id)=>{
                console.log('deleted id', id);
                return {
                    url: `posts/${id}`,
                    method:'DELETE',
                }
            }
        }),
        createPost: builder.mutation({
            query: (newpost)=>{
                console.log('create post: ',newpost);
                return {
                    url: 'posts',
                    method:'POST',
                    body: newpost,
                    headers:{
                        'content-type': 'application/json; charset-UTF-8',
                    }
                }
            }
        }),
        updatePost: builder.mutation({
            query: (updatedata)=>{
                const {id, ...data} = updatedata
                console.log('update post: ',data);
                return {
                    url: `posts/${id}`,
                    method:'PUT',
                    body: data,
                    headers:{
                        'content-type': 'application/json; charset-UTF-8',
                    }
                }
            }
        })

    })
})
export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = postApi



