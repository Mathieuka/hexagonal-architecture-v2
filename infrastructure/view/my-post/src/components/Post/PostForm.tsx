import React, { useEffect, useState } from "react";
import { usePosts } from "@/hooks/usePosts";
import PostsList from "./PostsList";

const PostsForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { fetchPost, posts, createPost, deletePost } = usePosts();

  useEffect(() => {
    fetchPost();
    // @NOTE: we voluntary don't add fetchPost in the dependencies array for the demo
  }, []);

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
          type="text"
          role="input"
          aria-label="title"
        />
        <input
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter the content"
          type="text"
          role="input"
          aria-label="content"
        />
      </div>
      <button
        onClick={() => createPost({ title, body })}
        style={{ margin: "10px", width: "100px" }}
        type="button"
        aria-label="add"
      >
        Add
      </button>
      <PostsList posts={posts} onDeletePost={deletePost} />
    </>
  );
};

export default PostsForm;
