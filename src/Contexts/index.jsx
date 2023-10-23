import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

// contextを作成
export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    // 作成したcontextオブジェクトを子コンポーネントに渡す
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
