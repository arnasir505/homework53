import React from 'react'

interface Props {
  id: string,
  text: string
}

const Task: React.FC<Props> = ({id, text}) => {
  return (
    <div>{text}</div>
  )
}

export default Task