import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import Input from '../../customTags/Input/Input'
import Button from '../../customTags/Button/Button'
import { BiPlus, BiArrowFromLeft } from 'react-icons/bi'

// const TODOS_KEY = 'todo/todos'
export default React.memo(function TodoPage() {
  const todoName = useRef()
  const todoDescription = useRef()

  const [todo, setTodo] = useState([])
  const [openEditor, setOpenEditor] = useState(false)

  const createMenuVariants = {
    open: { width: 'auto' },
    closed: { width: 0 },
  }

  // useEffect(() => {
  //   localStorage.setItem(TODOS_KEY, JSON.stringify(todo))
  // }, [todo])

  // useEffect(() => {
  //   const localTodos = localStorage.getItem(TODOS_KEY)
  //   if (localTodos !== '') setTodo(JSON.parse(localTodos))
  // }, [])

  const createTodo = () => {
    if (/^ *$/.test(todoName.current.value)) return
    const newTodos = [
      ...todo,
      {
        status: 'open',
        information: {
          name: todoName.current.value,
          description: todoDescription.current.value,
          finishPoint: {
            date: '24.02.2007',
            time: '02:54AM',
          },
        },
        date: new Date().toLocaleString('en', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        id: uuidv4(),
      },
    ]
    setTodo(newTodos)
    todoName.current.value = ''
    todoDescription.current.value = ''
    setOpenEditor(!openEditor)
  }

  const deleteTodo = (id) => {
    const newTodos = todo.filter((todo) => todo.id !== id)
    setTodo(newTodos)
  }

  const editTodo = (id, changes) => {
    let todoToEdit = todo.filter((todo) => todo.id === id)[0]
    todoToEdit.information = changes
    const newTodos = [...todo.filter((todo) => todo.id !== id), todoToEdit]
    setTodo(newTodos)
  }

  return (
    <>
      <div className={'flex justify-end items-center mb-3 ' + (openEditor ? 'gap-3' : 'gap-0')}>
        <Button onClick={() => setOpenEditor(!openEditor)}>
          {openEditor ? <BiArrowFromLeft className='p-[1px] text-[18px]' /> : <BiPlus className='p-[1px] text-[18px]' />}
        </Button>
        <motion.div initial={{ width: 0 }} variants={createMenuVariants} animate={openEditor ? 'open' : 'closed'}>
          <div className='overflow-hidden flex justify-end items-center gap-3 rounded-lg'>
            <Button onClick={createTodo}>Create</Button>
            <Input type='text' ref={todoName} placeholder='Name' />
            <Input type='text' ref={todoDescription} placeholder='Description' />
          </div>
        </motion.div>
      </div>
      <div className='flex flex-col gap-3'>
        {todo.map((todo) => (
          <Todo todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} key={todo.id} />
        ))}
      </div>
    </>
  )
})
