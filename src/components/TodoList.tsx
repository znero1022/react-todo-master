import { useState } from 'react'
import { dummyTodos } from '@/dummyData'
import { Button } from '@/components/common/Button'
import { TodoItem } from '@/components/TodoItem'

export const TodoList = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState(dummyTodos)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const addTodo = () => {}

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
          return <TodoItem todoData={todoData} key={todoData.id} />
        })}
      </div>
    </div>
  )
}
