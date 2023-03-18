import React from "react";
import { Post } from "@/domain/models/Post";
import styles from "@/styles/Home.module.css";

const PostsList = ({
  posts,
  onDeletePost,
}: {
  posts: Post[];
  onDeletePost: (id: number) => void;
}) => {
  return (
    <>
      {posts?.map(({ id, title, body }) => {
        return (
          <div key={id} className={styles.card}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "5px",
              }}
            >
              <button onClick={() => onDeletePost(id)}>X</button>
            </div>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Content: {body}</p>
          </div>
        );
      })}
    </>
  );
};

export default PostsList;
