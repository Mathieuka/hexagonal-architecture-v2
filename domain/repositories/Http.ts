// Repositories All types and interfaces related with the repositories
// (a repository is in charge of bringing data from a web service, or a database, or a file...).

export interface Http {
  get: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any
  ) => Promise<T | any>;
  post: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any
  ) => Promise<T | any>;
  put: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any
  ) => Promise<T | any>;
  delete: <T>(path: string, params?: any, config?: any) => Promise<T | any>;
}
