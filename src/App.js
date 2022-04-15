import './App.css';
// import Data  from './components/Data';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';

function App() {
  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(3);
  // const responseInfo = useGetPostByLimitQuery(3);
  // const [deletePost, responseInfo] = useDeletePostMutation();
  // const [createPost, responseInfo] = useCreatePostMutation();
  const [updatePost, responseInfo] = useUpdatePostMutation();


  console.log('response data' ,responseInfo);
  console.log('response data' ,responseInfo.data);
  console.log('isError' ,responseInfo.isError);
  console.log('sucess: ' ,responseInfo.isSuccess);

  if(responseInfo.isLoading) return <div>Loading.....</div>;
  if(responseInfo.isError) return <div>Error Occured: {responseInfo.error.error}</div>;

  // const newpost = {
  //   title:'this is new title',
  //   body:'this is new  booody',
  //   userId: 1,
  // };
  const updatedate = {
    id: 1,
    title:'this is new title',
    body:'this is new  booody',
    userId: 1,
  };

  return (
    <>
      <h1>Redux Toolkit - RTK Query(Get All Data)</h1>
      {/* get all post
      {responseInfo.data.map((post,i)=>(
        <div key={i}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))} */}
      {/* get data by it
      <p>{responseInfo.data.id}</p>
      <p>{responseInfo.data.title}</p>
      <p>{responseInfo.data.body}</p> */}
      {/* get post by limit */}
      {/* {responseInfo.data.map((post,i)=>(
        <div key={i}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))} */}
      {/* delete post */}
      {/* <div>
        <button onClick={()=>{deletePost(2)}}>Delete Post</button>
      </div> */}
      {/* create post */}
      {/* <div>
        <button onClick={()=>{createPost(newpost)}}>Create Post</button>
      </div> */}
      {/* update post */}
      <div>
        <button onClick={()=>{updatePost(updatedate)}}>Update Post</button>
      </div>
    </>
  );
}

export default App;
