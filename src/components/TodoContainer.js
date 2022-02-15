import React from 'react';

function TodoContainer() {
  const [todos, setTodos] = React.useState(
    [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  );

  const todoElements = todos.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ));

  return (
    <>
      <ul>
        {todoElements}
      </ul>
    </>
  );
}

export default TodoContainer;
