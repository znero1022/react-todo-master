import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api", () => {
    return HttpResponse.json({ message: "hello" });
  }),
];
