import { BaseLayout } from "../../organisms/BaseLayout";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CommonButton } from "../../atoms/CommonButton";
import { useTodoContext } from "../../../Contexts";
import { useTodoCreateTemplate } from "./useTodoCreateTemplate";
import styles from "./styles.module.css";

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo },
  ] = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title={"Create Todo"}>
      <form className={styles.container} onSubmit={handleCreateTodo}>
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
