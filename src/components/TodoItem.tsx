import { useState } from 'react'
import { Todo } from '@/mocks/todosHandler'
import { Button } from '@/components/common/Button'
import { CheckBox } from '@/components/common/CheckBox'
import TrashIcon from '@/assets/trash-solid.svg'

export const TodoItem = ({ todoData, deleteTodo }): { Todo } => {
  const { id, title, content, isDone, tags } = todoData
  const [checked, setChecked] = useState(isDone)

  return (
    <div
      className={`todoItem displayBetween my-2 MediumS-none ${checked && 'opacity-50'}`}
      id={`todoItem-${id}`}
    >
      <CheckBox checked={checked} setChecked={setChecked} />
      {`${title}: ${content}`}
      <Button className="w-3.5" onClick={() => deleteTodo(id)}>
        <img src={TrashIcon} alt="Delete Icon" />
      </Button>
    </div>
  )
}
