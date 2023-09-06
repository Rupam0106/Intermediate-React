import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const getTodo = async () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodo,
  });

  return (
    <ul className="list-group d-flex justify-content-center p-4">
      {data &&
        data.map((todo: Todo) => (
          <li key={todo.id} className="list-group-item p-4">
            {todo.title}
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
