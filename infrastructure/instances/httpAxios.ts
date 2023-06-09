// Instances He we have created concrete instances for our client and repositories.
// You can see like the entry point of your system.

import axios from "axios";
import { Http } from "@domain/repositories/Http";

const headers = {
  "Content-Type": "application/json",
};

export const httpAxios: Http = {
  get: async <T>(
    path: string,
    params?: Record<string, unknown>,
    config?: Record<string, unknown>
  ) => {
    const response = await axios.get(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },
  post: async <T>(
    path: string,
    params?: Record<string, unknown>,
    config?: Record<string, unknown>
  ) => {
    const response = await axios.post(
      path,
      { ...params },
      { ...config, headers }
    );
    return response.data as T;
  },
  put: async <T>(
    path: string,
    params?: Record<string, unknown>,
    config?: Record<string, unknown>
  ) => {
    const response = await axios.put(
      path,
      { ...params },
      { ...config, headers }
    );
    return response.data as T;
  },
  delete: async <T>(
    path: string,
    params?: unknown,
    config?: Record<string, unknown>
  ) => {
    const response = await axios.delete(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },
};
