// Services A service is responsible for interacting with our models and performing actions on them.

import { PostRepository } from "../repositories/Post";

// ID + ADAPTER
export const postService = (repository: PostRepository): PostRepository => ({
  getPosts: () => repository.getPosts(),
  createPost: (newPost, posts) => {
    return repository.createPost(newPost, posts);
  },
  deletePost: (id, posts) => repository.deletePost(id, posts),
  updatePost: (id, newPost, posts) => repository.updatePost(id, newPost, posts),
});
