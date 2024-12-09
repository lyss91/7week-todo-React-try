import React from "react";
import { Link } from "react-router-dom";
import "/src/App.css"; // CSS 파일을 import 합니다.

const TodoItem = ({ item, onDelete }) => {
  // 날짜를 yyyy-mm-dd 형식으로 변환
  const formatDate = dateString => {
    if (!dateString) {
      // 날짜가 없으면 현재 날짜를 반환
      dateString = new Date().toISOString();
    }
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid Date"; // 잘못된 날짜 형식 처리
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <ul>
      <li>
        <div>
          <Link to={`/todo/detail/${item.id}`}>
            <button>
              <h3>TodoItem.jsx 에 있는 - {item.title}</h3>
            </button>
          </Link>
          <p>작성자: {item.author}</p>
          <p>날짜: {formatDate(item.date)}</p> {/* 날짜 형식 변경 */}
          <div>
            {/* 수정 버튼 */}
            <Link to={`/todo/edit/${item.id}`}>
              <button className="todo-button edit">수정</button>
            </Link>
            {/* 삭제 버튼 - Link 형태로 유지 */}
            <Link
              to="#"
              className="todo-button delete"
              onClick={e => {
                e.preventDefault(); // 기본 동작 방지
                onDelete(item.id); // 부모의 삭제 함수 호출
              }}
            >
              삭제
            </Link>
            {/* 자세히 보기 버튼 */}
            <Link to={`/todo/detail/${item.id}`}>
              <button className="todo-button view">자세히보기</button>
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default TodoItem;
