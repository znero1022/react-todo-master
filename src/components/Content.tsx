import { TodoList } from '@/components/TodoList'

export const Content = () => {
  return (
    <div className="displayCenter flex-col">
      <h2 className="mt-5 BoldL-none">To Do List</h2>
      <TodoList />
    </div>
  )
}
