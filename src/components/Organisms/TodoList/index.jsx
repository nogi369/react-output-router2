import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";
import styles from "./styles.module.css";

export const TodoList = ({ todoList, deleteTodo }) => {
  const navigate = useNavigate();

  // 詳細ページへ遷移
  const handleMoveDetail = useCallback(
    (id) => navigate(`${NAVIGATION_PATH.DETAIL}${id}`),
    [navigate]
  );

  // 編集ページへ遷移
  const handleMoveEdit = useCallback(
    (id) => navigate(`${NAVIGATION_PATH.EDIT}${id}`),
    [navigate]
  );

  return (
    <div>
      <ul className={styles.list}>
        {todoList.map((todo) => (
          <li className={styles.todo} key={todo.id}>
            <span className={styles.task}>{todo.title}</span>
            <div className={styles.area}>
              <div className={styles.far}>
                <FontAwesomeIcon
                  icon={faFile}
                  size="lg"
                  onClick={() => handleMoveDetail(todo.id)}
                />
              </div>
              <div className={styles.far}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="lg"
                  onClick={() => handleMoveEdit(todo.id)}
                />
              </div>
              <div className={styles.far}>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  size="lg"
                  onClick={() => deleteTodo(todo.id, todo.title)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
