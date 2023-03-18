import { server } from "./server";

export const runMockServiceWorker = () => {
    if (process.env.NODE_ENV === "development") {
        server.listen();
    }
}