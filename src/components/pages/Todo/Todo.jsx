import React, { useRef, useState } from 'react'
import Button from '../../customTags/Button/Button'
import Input from '../../customTags/Input/Input'
import { BiEditAlt } from 'react-icons/bi'

export default function Todo({ todo, deleteTodo, editTodo }) {
  const [isEditorOpen, setEditorOpen] = useState(false)
  const editorNameRef = useRef()
  const editorDescriptionRef = useRef()

  const statusColors = {
    open: 'emerald-600',
    closed: 'rose-600',
    inProgress: 'cyan-500',
  }

  const saveChanges = () => {
    if (/^ *$/.test(editorNameRef.current.value)) return
    editTodo(todo.id, {
      name: editorNameRef.current.value,
      description: editorDescriptionRef.current.value,
    })
    setEditorOpen(false)
  }

  return (
    <div className='basic-ui'>
      {isEditorOpen ? (
        <div className='flex justify-between items-center'>
          <div>
            <span className='mr-3'>Name:</span>
            <Input type='text' ref={editorNameRef} defaultValue={todo.information.name} placeholder='Name' />
            <span className='mx-3'>Description:</span>
            <Input type='text' ref={editorDescriptionRef} defaultValue={todo.information.description} placeholder='Description' />
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Button onClick={saveChanges}>Save</Button>
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </div>
        </div>
      ) : (
        <div className='flex justify-between items-center'>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-lg'>
              <b>{todo.information.name}</b>
            </span>
            <span className='text-sm'>
              {todo.information.description.length >= 30
                ? todo.information.description.slice(0, 30) + '...'
                : todo.information.description}
            </span>
          </div>
          <Button onClick={() => setEditorOpen(true)}>
            <BiEditAlt />
          </Button>
        </div>
      )}
      {/* <span>{todo.date}</span> */}
    </div>
  )
}
