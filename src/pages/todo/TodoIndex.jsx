import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

// useEffect를 이용해서 할일 목록을 불러오시오.
// useState 를 이용해서 목록을 map 으로 출력하시오.
import { TODO_MOCK_DATA } from "../../constants/mockdata";
import TodoItem from "../../components/todo/TodoItem";

function TodoIndex() {
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  // Mock 데이터 로드
  useEffect(() => {
    setTodoList(TODO_MOCK_DATA);
  }, []);

  // 삭제 함수
  const handleDelete = id => {
    setTodoList(prevList => prevList.filter(item => item.id !== id)); // 삭제된 목록 업데이트
  };

  return (
    <div>
      <h1>TODO 해보기 TodoIndex.jsx 화면 입니다</h1>
      <div>
        <ul>
          {todoList.map(item => (
            <TodoItem
              key={item.id}
              item={item}
              todoList={todoList}
              setTodoList={setTodoList}
              onDelete={handleDelete} // 삭제 함수 전달
            />
          ))}
        </ul>
      </div>
      <div>
        {/* "추가하기" 버튼 클릭 시 "/todo/add"로 이동 */}
        <button onClick={() => navigate("/todo/add")}>추가하기</button>
      </div>
    </div>
  );
}

export default TodoIndex;
