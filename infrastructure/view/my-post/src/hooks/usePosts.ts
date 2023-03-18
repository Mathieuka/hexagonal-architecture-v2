import { useState } from "react";
import { Post } from "@/domain/models/Post";
import { postService } from "@/domain/services/Post.services";
import { postRepository } from "@/infrastructure/repositories/postRepository";
import { httpAxios } from "@/infrastructure/instances/httpAxios";

export const usePosts = () => {
  const [posts, setPost] = useState<Post[]>([]);

  const fetchPost = async () => {
    const posts = await postService(postRepository(httpAxios)).getPosts();
    setPost(() => posts);
  };

  const deletePost = (id: number) => {
    const newPosts = postService(postRepository(httpAxios)).deletePost(
      id,
      posts
    );
    setPost(() => newPosts);
  };

  const createPost = (post: { title: string; body: string }) => {
    const newPosts = postService(postRepository(httpAxios)).createPost(
      post,
      posts
    );
    setPost(() => newPosts);
  };

  return { fetchPost, posts, createPost, deletePost };
};
