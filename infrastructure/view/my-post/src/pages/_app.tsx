import type { AppProps } from "next/app";
import { runMockServiceWorker } from "@/msw/utils";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  runMockServiceWorker();

  return <Component {...pageProps} />;
}
