import React from 'react';
import TodosList from './TodosList';
import data from './data';
import Header from './Header';

function TodoContainer() {
  const [todos, setTodos] = React.useState(data) // eslint-disable-line

  return (
    <>
      <Header />
      <TodosList todos={todos} />
    </>
  );
}

export default TodoContainer;
