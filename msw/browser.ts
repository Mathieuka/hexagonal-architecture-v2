// src/mocks/browser.js
import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers";

export const worker = setupWorker(...handlers);
