import { Todo } from '@/components/Todo'

export const Content = () => {
  return (
    <div className="displayCenter flex-col">
      <h2 className="mt-5 BoldL-none">To Do List</h2>
      <Todo />
    </div>
  )
}
