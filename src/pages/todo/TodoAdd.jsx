import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TodoAdd({ todoList = [], setTodoList }) {
  // `todoList` 기본값 설정
  const navigate = useNavigate();

  // 초기 상태
  const [newTodo, setNewTodo] = useState({
    id: "",
    author: "",
    title: "",
    content: "",
    date: new Date().toISOString().slice(0, 10), // 현재 날짜
    complete: false,
    privacy: false,
  });

  // 입력값 변경 핸들러
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setNewTodo(prevTodo => ({
      ...prevTodo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = e => {
    e.preventDefault();

    if (!newTodo.author || !newTodo.title || !newTodo.content) {
      alert("모든 필드를 입력해주세요!");
      return;
    }

    // `todoList`가 undefined일 경우를 대비
    const todoWithId = { ...newTodo, id: (todoList?.length || 0) + 1 };
    setTodoList(prevList => [...(prevList || []), todoWithId]);

    alert("새로운 할 일이 추가되었습니다!");
    navigate("/todo"); // 리스트 페이지로 이동
  };

  // 취소 버튼 핸들러
  const handleCancel = () => {
    navigate("/todo"); // 리스트 페이지로 이동
  };

  return (
    <div>
      <h1>Todo 추가하기</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">작성자</label>
        <input
          name="author"
          value={newTodo.author}
          onChange={handleChange}
          placeholder="작성자 이름"
        />
        <br />
        <label htmlFor="title">제목</label>
        <input
          name="title"
          value={newTodo.title}
          onChange={handleChange}
          placeholder="할 일 제목"
        />
        <br />
        <label htmlFor="content">내용</label>
        <input
          name="content"
          value={newTodo.content}
          onChange={handleChange}
          placeholder="할 일 내용"
        />
        <br />
        <label htmlFor="date">날짜</label>
        <input
          name="date"
          type="date"
          value={newTodo.date}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="complete">완료여부</label>
        <input
          name="complete"
          type="checkbox"
          checked={newTodo.complete}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="privacy">공개여부</label>
        <input
          name="privacy"
          type="checkbox"
          checked={newTodo.privacy}
          onChange={handleChange}
        />

        <div>
          <button type="submit">추가하기</button>
          <button type="button" onClick={handleCancel}>
            취소하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoAdd;
