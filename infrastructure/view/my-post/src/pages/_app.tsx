import type { AppProps } from "next/app";
import { initMocks } from "@/msw/index";
import "@/styles/globals.css";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  initMocks();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
