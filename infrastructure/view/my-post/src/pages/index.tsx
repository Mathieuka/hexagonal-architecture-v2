import {useEffect, useState} from "react";
import { obj, Post } from "@/domain/models/Post";
import { httpAxios } from "@/infrastructure/instances/httpAxios";
import { postService } from "@/domain/services/Post.services";
import {postRepository}  from "@/infrastructure/repositories/postRepository";
import { PostForm } from "@/infrastructure/view/my-post/src/components/PostForm";
import styles from '@/styles/Home.module.css'
// import {worker} from "@/msw/browser";

// if (typeof window !== undefined) {
//     console.log('%c LOG BROWSER', 'background: #222; color: #bada55', typeof window);
//     const { worker } = require("@/msw/browser");
//     worker.start();
// }

export default function Home() {

    const [posts, setPost] = useState<Post[]>([]);

    const fetchPost = async () => {
        // const posts = await postService(postRepository()).getPosts();
        setPost(() => posts);
    };

    const deletePost = (id: number) => {
        const newPosts = postService(postRepository(httpAxios)).deletePost(id, posts);
        setPost(() => newPosts);
    };

    const createPost = (post: { title: string; body: string }) => {
        const newPosts = postService(postRepository(httpAxios)).createPost(post, posts);
        setPost(() => newPosts);
    };

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    return (
        <div className={styles.App}>
            <PostForm
                posts={posts}
                onDeletePost={deletePost}
                onCreatePost={createPost}
            />
        </div>
    );
}
