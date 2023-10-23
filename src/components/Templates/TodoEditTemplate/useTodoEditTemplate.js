import { useParams } from "react-router-dom";
import { useState, useCallback, useMemo } from "react";
import { NAVIGATION_PATH } from "../../../constants/navigations";
import { useNavigate } from "react-router";

export const useTodoEditTemplate = ({ originTodoList, updateTodo }) => {
  // 画面遷移操作を実現
  const navigate = useNavigate();
  // Todo定義
  const { id } = useParams();
  // メモ化
  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === id),
    [id, originTodoList]
  );

  // local state

  // todo?.title = undefinedにすることで参照エラーになることを防ぐ
  const [inputTitle, setInputTitle] = useState(todo?.title || "");
  const [inputContent, setInputContent] = useState(todo?.content || "");

  const handleChangeTitle = useCallback((e) => {
    setInputTitle(e.target.value);
  }, []);

  const handleChangeContent = useCallback((e) => {
    setInputContent(e.target.value);
  }, []);

  // Todo更新実行処理
  const handleUpdateTodo = useCallback(
    (e) => {
      e.preventDefault();
      // todo.idがある かつ inputTitleが空文字でない かつ inputContentが空文字でない
      if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [navigate, todo.id, inputTitle, inputContent, updateTodo]
  );

  const states = {
    todo,
    updateTodo,
    inputTitle,
    inputContent,
  };

  const actions = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };

  return [states, actions];
};
