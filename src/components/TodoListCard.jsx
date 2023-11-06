import React from "react";

const TodoListCard = ({ todos, setTodos, listIsDone }) => {
  // TodoListCard 삭제버튼 함수
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // TodoListCard 이동버튼 함수
  const clickToggleButtonHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h2>{listIsDone ? "I am 이해했다 에요!✨" : "Just DO It🔥"}</h2>
      <div className="tdlContainer">
        {todos
          .filter((todo) => todo.isDone === listIsDone)
          .map((todo) => {
            return (
              <div className="tdlCard" key={todo.id}>
                <div className="tdlCardTitle">{todo.title}</div>
                <div className="tdlCardContents">{todo.contents}</div>
                <div className="tdlCardButtonBox">
                  <div className="tdlCardButton">
                    <button
                      className="delBtn"
                      onClick={() => clickRemoveButtonHandler(todo.id)}
                    >
                      삭제
                    </button>
                    <button
                      className="cpBtn"
                      onClick={() => clickToggleButtonHandler(todo.id)}
                    >
                      {todo.isDone ? "복습하기!" : "완료!!"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoListCard;
