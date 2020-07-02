import React from 'react';

type TodoListProps = {
  todos: string[]
}

export const TodoList: React.FunctionComponent<TodoListProps> = props => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li>
            {todo}
          </li>
        )
      })}
    </ul>
  )
}
