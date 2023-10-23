import { BaseLayout } from "../../Organisms/BaseLayout";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CommonButton } from "../../atoms/CommonButton";
import { useTodoContext } from "../../../Contexts";
import { useParams } from "react-router-dom";
import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigations";
import styles from "./styles.module.css";

export const TodoEditTemplate = () => {
  // 画面遷移操作を実現
  const navigate = useNavigate();
  // グローバルstate取得
  const { originTodoList, updateTodo } = useTodoContext();
  // Todo定義
  const { id } = useParams();
  //// メモ化
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

  return (
    <BaseLayout title={"TodoEdit"}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
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
            <CommonButton type="submit" label="Edit Todo" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
