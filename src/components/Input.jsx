import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const writeTitle = (event) => {
    setTitle(event.target.value);
  };

  const writeContents = (event) => {
    setContents(event.target.value);
  };

  // 내용 입력 추가하기
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: nanoid(),
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  return (
    <div className="InputContainer">
      <div className="info">
        제목 :
        <input
          className="titleInputBox"
          type="text"
          value={title}
          onChange={writeTitle}
        />
        내용 :
        <textarea
          className="contentsInputBox"
          type="text"
          value={contents}
          onChange={writeContents}
        />
      </div>
      <div className="addBtnBox">
        <button className="addBtn" onClick={clickAddButtonHandler}>
          추가하기
        </button>
      </div>
    </div>
  );
};

export default Input;
