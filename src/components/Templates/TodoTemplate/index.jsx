/**
 * TodoTemplate
 *
 * @package components
 */
import { useMemo, useState } from "react";
import { TodoList } from "../../Organisms/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { useTodoContext } from "../../../Contexts";
import { BaseLayout } from "../../Organisms/BaseLayout";
import styles from "./styles.module.css";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */

export const TodoTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();

  // local state
  const [searchKeyword, setSearchKeyword] = useState("");
  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      const regExp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regExp);
    });
  }, [originTodoList, searchKeyword]);

  // 検索キーワード変更処理
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

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
