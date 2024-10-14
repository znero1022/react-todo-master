import { http, HttpResponse } from "msw";

export interface Todo {
  id: number;
  title: string;
  content?: string;
  isDone: boolean;
  tags: string[];
}

const todos: Todo[] = [];

export const handlers = [
  http.get("/api", () => {
    return HttpResponse.json({ todos, code: 200 });
  }),

  http.get("/api/todos", (req) => {
    const { searchParams } = new URL(req.request.url);

    const page = Number(searchParams.get("page")) || 0;
    const pageSize = 10;

    const start = page * pageSize;
    const end = start + pageSize;

    const paginatedTodos = todos.slice(start, end);

    return HttpResponse.json({ data: paginatedTodos, code: 200, page, pageSize, total: todos.length });
  }),

  http.get("/api/todos/:id", (req) => {
    const { id } = req.params;

    const todo = todos.find((todo) => todo.id === Number(id));

    if (!todo) return HttpResponse.json({ message: "todo not found", code: 404 }, { status: 404 });

    return HttpResponse.json({ data: todo, code: 200 });
  }),

  http.post("/api/todos", async (req) => {
    const body = await req.request.json();

    if (!body) return HttpResponse.json({ message: "body is required", code: 400 }, { status: 400 });

    const { title, content, tags } = body as Todo;

    if (title === undefined || content === undefined) {
      return HttpResponse.json({ message: "title, content are required", code: 400 }, { status: 400 });
    }

    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
      tags: tags || [],
    };

    todos.push(newTodo);

    return HttpResponse.json({ message: "success", data: newTodo, code: 201 }, { status: 201 });
  }),

  http.put("/api/todos/:id", async (req) => {
    const { id } = req.params;
    const body = (await req.request.json()) as Partial<Todo>;

    if (!body) return HttpResponse.json({ message: "body is required" }, { status: 400 });

    const index = todos.findIndex((todo) => todo.id === Number(id));

    if (index === -1) return HttpResponse.json({ message: "todo not found" }, { status: 404 });

    todos[index] = { ...todos[index], ...body };

    return HttpResponse.json({ message: "success", data: todos[index], code: 200 });
  }),

  http.delete("/api/todos/:id", (req) => {
    const { id } = req.params;

    const index = todos.findIndex((todo) => todo.id === Number(id));

    if (index === -1) return HttpResponse.json({ message: "todo not found", code: 404 }, { status: 404 });

    todos.splice(index, 1);

    return HttpResponse.json({ message: "success", code: 200 });
  }),
];
