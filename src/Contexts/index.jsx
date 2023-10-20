import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

// contextを作成
export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const {
    addInputValue,
    searchKeyword,
    showTodoList,
    handleAddTodo,
    onChangeAddInputValue,
    handleChangeSearchKeyword,
    deleteTodo,
  } = useTodo();

  return (
    // 作成したcontextオブジェクトを子コンポーネントに渡す
    <TodoContext.Provider
      value={{
        addInputValue,
        searchKeyword,
        showTodoList,
        handleAddTodo,
        onChangeAddInputValue,
        handleChangeSearchKeyword,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
