import { BaseLayout } from "../../organisms/BaseLayout";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CommonButton } from "../../atoms/CommonButton";
import { useTodoEditTemplate } from "./useTodoEditTemplate";
import { useTodoContext } from "../../../Contexts";
import styles from "./styles.module.css";

export const TodoEditTemplate = () => {
  // grobal state
  const { originTodoList, updateTodo } = useTodoContext();
  // conect useTodoEditTemplate
  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ] = useTodoEditTemplate({ originTodoList, updateTodo });

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
