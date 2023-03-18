import { rest } from "msw";
import { posts } from "./posts";
import * as process from "process";

const BASE_URL =
  process.env.NODE_ENV === "test"
    ? process.env.BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;

const getPosts = rest.get(`${BASE_URL}/posts`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(posts));
});

export const handlers = [getPosts];
