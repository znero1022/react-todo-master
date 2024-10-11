import { http, HttpResponse } from "msw";

interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

const todos: Todo[] = [];

export const handlers = [
  http.get("/api", () => {
    return HttpResponse.json({ message: "hello" });
  }),

  http.get("/api/todos", () => {
    return HttpResponse.json(todos);
  }),

  http.post("/api/todos", (req) => {
    const body = req.request.body as Partial<Todo>;

    if (!body) return HttpResponse.json({ message: "body is required" }, { status: 400 });

    const { title, content } = body;

    if (title === undefined || content === undefined) {
      return HttpResponse.json({ message: "title, content are required" }, { status: 400 });
    }

    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };

    todos.push(newTodo);

    return HttpResponse.json({ message: "success", post: newTodo });
  }),

  http.put("/api/todos/:id", (req) => {
    const { id } = req.params;
    const body = req.request.body as Partial<Todo>;

    if (!body) return HttpResponse.json({ message: "body is required" }, { status: 400 });

    const todo = todos.find((todo) => todo.id === Number(id));

    if (!todo) return HttpResponse.json({ message: "todo not found" }, { status: 404 });

    Object.assign(todo, body);

    return HttpResponse.json({ message: "success", todo });
  }),

  http.delete("/api/todos/:id", (req) => {
    const { id } = req.params;

    const index = todos.findIndex((todo) => todo.id === Number(id));

    if (index === -1) return HttpResponse.json({ message: "todo not found" }, { status: 404 });

    todos.splice(index, 1);

    return HttpResponse.json({ message: "success" });
  }),
];
