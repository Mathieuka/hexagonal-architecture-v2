import { Post } from "../models/Post";

export interface PostRepository {
    getPosts: () => Promise<Post[]>;
    addPost: (newPost: Post, posts: Post[]) => Post[];
    removePost: (id: number, posts: Post[]) => Post[];
    updatePost: (
        id: number,
        params: { title?: string; body?: string },
        posts: Post[]
    ) => Post[];
}