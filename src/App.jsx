import React, { useEffect, useState } from 'react'
import TodoPage from './components/pages/Todo/TodoPage'
import Button from './components/customTags/Button/Button'
import { BiSun, BiMoon } from 'react-icons/bi'

function App() {
  const [theme, setTheme] = useState(true)
  const rootElement = document.documentElement

  useEffect(() => {
    if (theme) rootElement.classList.add('dark')
    else rootElement.classList.remove('dark')
  }, [theme])

  return (
    <div className='p-10 bg-gray-100 dark:bg-gray-800 h-screen transition-all duration-75'>
      <Button cname='rounded-full' onClick={() => setTheme(!theme)}>
        {theme ? <BiMoon /> : <BiSun />}
      </Button>
      <TodoPage />
    </div>
  )
}

export default App
