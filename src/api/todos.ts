import { Api } from "@/mocks/api";
import { Todo } from "@/mocks/todosHandler";

export const TodoAPI = Api<Todo>("/api/todos");
