import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <input
      className={
        'basic-ui duration-75 transition-colors outline-none pl-3 p-[9px] border border-gray-300 dark:border-gray-600 focus:border-2 focus:p-2 focus:pl-[11px] focus:border-gray-500 dark:focus:border-gray-300 hover:border-gray-500 dark:hover:border-gray-300 ' +
        props.cname
      }
      ref={ref}
      {...props}
    />
  )
})

export default Input
