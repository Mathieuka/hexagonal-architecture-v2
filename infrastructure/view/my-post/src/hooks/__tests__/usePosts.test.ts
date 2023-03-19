import { renderHook, act, waitFor } from "@testing-library/react";
import { usePosts } from "@/hooks/usePosts";

describe("usePost hook", () => {
  test("should fetch the posts, create and delete", async () => {
    const { result } = renderHook(() => usePosts());

    await waitFor(() => {
      result.current.fetchPost();
    });

    await waitFor(() => {
      expect(result.current.posts.length).toEqual(6);
    });

    act(() => {
      result.current.createPost({
        title: "Craft",
        body: "Hexagonal architecture",
      });
    });

    await waitFor(() => {
      expect(result.current.posts.length).toEqual(7);
    });

    act(() => {
      result.current.deletePost(1);
    });

    await waitFor(() => {
      expect(result.current.posts.length).toEqual(6);
    });
  });
});
