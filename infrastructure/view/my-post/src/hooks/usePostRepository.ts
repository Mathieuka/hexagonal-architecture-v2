import { postService } from "@/domain/services/Post.services";
import { postRepository } from "@/infrastructure/repositories/postRepository";
import { httpAxios } from "@/infrastructure/instances/httpAxios";

export const usePostRepository = () => {
  return postService(postRepository(httpAxios));
};
