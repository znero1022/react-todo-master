import { setupWorker } from "msw/browser";
import { handlers } from "./todosHandler";

export const worker = setupWorker(...handlers);

export const runServer = async () => {
  if (!import.meta.env.DEV) return;

  await worker.start({
    onUnhandledRequest: "bypass", // 처리되지 않은 요청을 무시하고 서버로 요청을 전달
  });
};
