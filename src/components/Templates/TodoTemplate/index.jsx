/**
 * TodoTemplate
 *
 * @package components
 */
import { TodoList } from "../../Organisms/TodoList";
import styles from "./styles.module.css";
import { InputForm } from "../../atoms/InputForm";
import { useTodoContext } from "../../../Contexts";
import { BaseLayout } from "../../Organisms/BaseLayout";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */

export const TodoTemplate = () => {
  const { searchKeyword, showTodoList, handleChangeSearchKeyword, deleteTodo } =
    useTodoContext();

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
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
