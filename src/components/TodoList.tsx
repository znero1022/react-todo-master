import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '@/mocks/todosHandler'
import { dummyTodos } from '@/dummyData'
import { Button } from '@/components/common/Button'
import { TodoItem } from '@/components/TodoItem'

export const TodoList = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState(dummyTodos)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const addTodo = () => {
    const newTodo: Todo = {
      id: uuidv4(),
      title: value,
      content: value,
      isDone: false,
      tags: ['default'],
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="displayCenter mt-5 w-2/3 flex-col">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Add new task"
          value={value}
          onChange={onChange}
          className="textInput w-full"
        />
        <Button
          className="addButton absolute right-0 top-0 h-full"
          onClick={addTodo}
        >
          Add
        </Button>
      </div>
      <div className="mainBox mt-3 w-full">
        {todos.map((todoData) => {
          return (
            <TodoItem
              todoData={todoData}
              key={todoData.id}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </div>
    </div>
  )
}
