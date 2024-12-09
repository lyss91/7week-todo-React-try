import { useParams } from "react-router-dom";
import { TODO_MOCK_DATA } from "../../constants/mockdata";

function TodoDetail() {
  const { id } = useParams();

  // 데이터 검색
  const getTodo = () => {
    return TODO_MOCK_DATA.find(item => String(item.id) === id);
  };

  const todo = getTodo();

  if (!todo) {
    return <p>해당 할 일을 찾을 수 없습니다.</p>; // 데이터가 없을 때
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>작성자: {todo.author}</p>
      <p>내용: {todo.content}</p>
    </div>
  );
}

export default TodoDetail;
