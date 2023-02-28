import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo: Todo = response.data as Todo;

  logTodo(todo);

  const userId = todo.userId;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
});

const logTodo = (todo: Todo) => {
  console.log(`
    The todo with ID: ${todo.id}
    Has a title of: ${todo.title}
    Is it finished? ${todo.completed}
    Belong to user id: ${todo.userId}
  `);
};
