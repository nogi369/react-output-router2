import { useCallback, useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const useTodo = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  // Todo新規登録処理
  const addTodo = useCallback(
    (title, content) => {
      const nextUniqueId = uniqueId + 1;
      // 追加するTodoデータ
      const newTodo = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ];
      setOriginTodoList(newTodo);
      setUniqueId(nextUniqueId);
    },
    [originTodoList, uniqueId]
  );

  // Todo更新処理
  const updateTodo = useCallback(
    (id, title, content) => {
      const updateTodoList = originTodoList.map((todo) => {
        if (id === todo.id) {
          return {
            id: todo.id,
            title: title,
            content: content,
          };
        }
        return todo;
      });
      setOriginTodoList(updateTodoList);
    },
    [originTodoList]
  );

  // Todo削除処理
  const deleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodos = originTodoList.filter((todo) => todo.id !== targetId);

      setOriginTodoList(newTodos);
    }
  };

  return {
    originTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
