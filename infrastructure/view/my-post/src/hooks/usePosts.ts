import { useState } from "react";
import { Post } from "@/domain/models/Post";
import { usePostRepository } from "@/hooks/usePostRepository";

export const usePosts = () => {
  const [posts, setPost] = useState<Post[]>([]);
  const postRepository = usePostRepository();

  const fetchPost = async () => {
    const posts = await postRepository.getPosts();
    setPost(() => posts);
  };

  const deletePost = (id: number) => {
    const newPosts = postRepository.deletePost(id, posts);
    setPost(() => newPosts);
  };

  const createPost = (post: { title: string; body: string }) => {
    const newPosts = postRepository.createPost(post, posts);
    setPost(() => newPosts);
  };

  return { fetchPost, posts, createPost, deletePost };
};
