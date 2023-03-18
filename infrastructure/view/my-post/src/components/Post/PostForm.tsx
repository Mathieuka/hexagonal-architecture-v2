import React, { useState } from "react";
import { usePosts } from "@/hooks/usePosts";
import PostsList from "./PostsList";

const PostsForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { posts, createPost, deletePost } = usePosts();

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
          type="text"
        />
        <input
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter the content"
          type="text"
        />
      </div>
      <button
        onClick={() => createPost({ title, body })}
        style={{ margin: "10px", width: "100px" }}
        type="button"
      >
        Add
      </button>
      <PostsList posts={posts} onDeletePost={deletePost} />
    </>
  );
};

export default PostsForm;
