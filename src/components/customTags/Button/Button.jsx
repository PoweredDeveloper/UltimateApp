import React from 'react'

export default function Button(props) {
  return (
    <button
      className={
        'basic-ui transition-all duration-75 border-2 border-transparent hover:border-gray-500 dark:hover:border-gray-300 ' +
        props.cname
      }
      {...props}
    >
      {props.children}
    </button>
  )
}
