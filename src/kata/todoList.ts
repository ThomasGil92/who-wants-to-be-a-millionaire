interface Todo {
  name: string;
  status: "To-Do" | "In Progress" | "Done";
  category?: string;
}

export const todoManagerFactory = () => {
  const todos: Record<string, Todo> = {};
  return {
    getTodos: () => Object.values(todos),
    addTodo: (item: Todo) => {
      todos[item.name] = item;
    },
    deleteTodo: (todoName: Todo["name"]) => {
      if (todos[todoName].status !== "Done") delete todos[todoName];
    },
    classify:()=>{
        
    }
  };
};
