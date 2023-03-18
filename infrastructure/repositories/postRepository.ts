import { Http } from "@domain/repositories/Http";
import { PostRepository } from "@domain/repositories/Post";
import { PostDTO } from "@infrastructure/http/dto/postDTO";
import process from "process";

const BASE_URL =
  process.env.NODE_ENV === "test"
    ? process.env.BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

export const postRepository = (client: Http): PostRepository => ({
  getPosts: async () => {
    return client.get<PostDTO>(`${BASE_URL}/posts`);
  },
  createPost: (newPost, posts) => {
    const post = { userId: 1, id: posts.length + 1, ...newPost };
    return [post, ...posts];
  },
  deletePost: (id, posts) => posts.filter((post) => post.id !== id),
  updatePost: (id, params, posts) => {
    const index = posts.findIndex((post) => post.id === id);
    const newPosts = [...posts];

    if (index >= 0) {
      newPosts[index] = {
        ...newPosts[index],
        ...params,
      };
    }

    return newPosts;
  },
});
