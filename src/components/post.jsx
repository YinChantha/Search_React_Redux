import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../redux/actions/postActions";
const Post = () => {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);

  //get data from store
  const { loading, error, posts, post } = useSelector((data) => data);

  console.log(loading, error, posts, post);
  return (
    <div className="mt-10">
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <h1 className="mt-2">Total Posts {posts.length}</h1>

          {loading ? (
            <h2>Loading</h2>
          ) : error ? (
            <h2 style={{ color: "red" }}>
              {error.response.status && "No Post Found"}
            </h2>
          ) : (
            posts.map((post) => (
              <div className="mt-3">
                <a
                  rel="noopener noreferrer"
                  className="text-2xl font-bold hover:underline"
                >
                  {post.title}
                </a>
                <h1 className="mt-2">Post id : {post.id}</h1>
                <p className="mt-2">{post.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
