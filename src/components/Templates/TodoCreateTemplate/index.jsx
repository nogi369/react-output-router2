import { useState, useCallback } from "react";
import { BaseLayout } from "../../Organisms/BaseLayout";
import styles from "./styles.module.css";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CommonButton } from "../../atoms/CommonButton";
import { useNavigate } from "react-router";
import { useTodoContext } from "../../../Contexts";
import { NAVIGATION_LIST } from "../../../constants/navigations";

export const TodoCreateTemplate = () => {
  const navigate = useNavigate();
  const { addTodo } = useTodoContext();
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
        navigate(NAVIGATION_LIST.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  return (
    <BaseLayout title={"Create Todo"}>
      <form className={styles.container} onClick={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm
            value={inputTitle}
            onChange={handleChangeTitle}
            placeholder={"Title"}
          />
        </div>
        <div className={styles.area}>
          <TextArea
            value={inputContent}
            onChange={handleChangeContent}
            placeholder={"Content"}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" label="Create Todo" />
        </div>
      </form>
    </BaseLayout>
  );
};
