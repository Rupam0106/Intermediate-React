import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul className="list-group d-flex justify-content-center p-4">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item p-4">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
