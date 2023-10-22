import { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigations";

export const useTodoCreateTemplate = ({ addTodo }) => {
  const navigate = useNavigate();
  // local state
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const handleChangeTitle = useCallback((e) => {
    setInputTitle(e.target.value);
  }, []);

  const handleChangeContent = useCallback((e) => {
    setInputContent(e.target.value);
  }, []);

  const handleCreateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== "" && inputContent !== "") {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  const states = {
    inputTitle,
    inputContent,
  };

  const actions = {
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };

  return [states, actions];
};
