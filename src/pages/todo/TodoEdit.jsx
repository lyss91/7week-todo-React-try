import { useEffect, useState } from "react";
import { TODO_MOCK_DATA } from "../../constants/mockdata";
import { useNavigate, useParams } from "react-router-dom";

function TodoEdit() {
  // Params 로 id 를 추출하세요.
  const { id } = useParams();
  const navigate = useNavigate();

  // useState로 상태관리
  const [todo, setTodo] = useState({
    author: "",
    title: "",
    content: "",
    date: "",
    complete: false,
    privacy: false,
  });

  // useEffect 에서 id 를 이용해서 출력할 내용 추출
  useEffect(() => {
    const findTodo = TODO_MOCK_DATA.find(item => String(item.id) === id);
    if (findTodo) {
      setTodo(findTodo);
    } else {
      alert("존재하지 않는 데이터입니다.");
      navigate("/todo");
    }
  }, [id, navigate]);

  // 폼 데이터 변경 핸들러
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setTodo(prevTodo => ({
      ...prevTodo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 취소 버튼 클릭 핸들러
  const handleSubmit = e => {
    e.preventDefault();
    // 데이터를 저장하거나 업데이트하는 로직 추가
    console.log("Updated Todo:", todo);
    alert("수정이 완료되었습니다!");
    navigate(`/todo/detail?id=${id}`);
  };
  const handleCancel = () => {
    navigate(`/todo/detail?id=${id}`);
  };
  // useState 화면 리랜더링

  return (
    <div>
      <h1>TodoEdit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">작성자</label>
        <input name="author" value={todo.author} readOnly disabled />
        <br />
        <label htmlFor="title">제목</label>
        <input name="title" value={todo.title} onChange={handleChange} />
        <br />
        <label htmlFor="content">내용</label>
        <input name="content" value={todo.content} onChange={handleChange} />
        <br />
        <label htmlFor="date">날짜</label>
        <input
          name="date"
          type="date"
          value={todo.date}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="complete">완료여부</label>
        <input
          name="complete"
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="privacy">공개여부</label>
        <input
          name="privacy"
          type="checkbox"
          checked={todo.privacy}
          onChange={handleChange}
        />

        <div>
          <button type="submit">수정하기</button>
          <button type="button" onClick={handleCancel}>
            취소하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoEdit;
