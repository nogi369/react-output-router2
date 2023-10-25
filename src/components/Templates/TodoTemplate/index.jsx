/**
 * TodoTemplate
 *
 * @package components
 */
import { TodoList } from "../../Organisms/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { useTodoContext } from "../../../Contexts";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./styles.module.css";
import { useTodoTemplate } from "./useTodoTemplate";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */

export const TodoTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] =
    useTodoTemplate({ originTodoList });

  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm
            onChange={handleChangeSearchKeyword}
            value={searchKeyword}
            placeholder={"Search Keyword"}
          />
        </div>
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList todoList={showTodoList} deleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
