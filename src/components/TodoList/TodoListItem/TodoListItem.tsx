import React from 'react';
import './TodoListItem';
import { Todo, ToggleComplete } from '../../../types/types';

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type="checkbox" onChange={() => toggleComplete(todo)} checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};
