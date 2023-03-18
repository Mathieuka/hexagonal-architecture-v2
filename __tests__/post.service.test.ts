import { postService } from "@domain/services/Post.services";
import { postRepository } from "@infrastructure/repositories/postRepository";
import { httpAxios } from "@infrastructure/instances/httpAxios";

describe("Post service", () => {
  test("Get posts", async () => {
    const posts = await postService(postRepository(httpAxios)).getPosts();
    expect(posts.length).toEqual(6);
  });

  test("Add post", async () => {
    const posts = await postService(postRepository(httpAxios)).getPosts();
    const newPost = {
      userId: 3,
      id: posts.length,
      title: "Craft",
      body: "Hexagonal architecture",
    };
    const newPosts = postService(postRepository(httpAxios)).createPost(
      newPost,
      posts
    );

    expect(newPosts[0]).toEqual(newPost);
    expect(newPosts.length).toEqual(7);
  });

  test("Delete post", async () => {
    const posts = await postService(postRepository(httpAxios)).getPosts();
    const postId = 1;

    expect(posts.find((post) => post.id === postId)).toBeTruthy();
    const newPosts = postService(postRepository(httpAxios)).deletePost(
      postId,
      posts
    );
    expect(newPosts.find((post) => post.id === postId)).toEqual(undefined);
  });

  test("Update post", async () => {
    const posts = await postService(postRepository(httpAxios)).getPosts();
    const postId = 1;
    const post = posts.find((post) => post.id === postId);

    expect(post?.title).toEqual(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );

    const newPosts = postService(postRepository(httpAxios)).updatePost(
      postId,
      { title: "hexagonal" },
      posts
    );

    const postUpdated = newPosts.find((post) => post.id === postId);
    expect(postUpdated?.title).toEqual("hexagonal");
  });
});
