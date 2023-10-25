import { useMemo, useState } from "react";

export const useTodoTemplate = ({ originTodoList }) => {
  // local state
  const [searchKeyword, setSearchKeyword] = useState("");
  const showTodoList = useMemo(() => {
    const regExp = new RegExp("^" + searchKeyword, "i");
    return originTodoList.filter((todo) => {
      return todo.title.match(regExp);
    });
  }, [originTodoList, searchKeyword]);

  // 検索キーワード変更処理
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  const states = { searchKeyword, showTodoList };
  const actions = { handleChangeSearchKeyword };

  return [states, actions];
};
