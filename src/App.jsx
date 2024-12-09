import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout"; // Layout 컴포넌트 import
import About from "./pages/About";
import TodoIndex from "./pages/todo/TodoIndex";
import TodoAdd from "./pages/todo/TodoAdd";
import TodoDetail from "./pages/todo/TodoDetail";
import TodoEdit from "./pages/todo/TodoEdit";
import NotFound from "./pages/NotFound";

import React, { useState } from "react";
import { TODO_MOCK_DATA } from "./constants/mockdata";

function App() {
  // `todoList`와 `setTodoList` 상태 추가
  const [todoList, setTodoList] = useState(TODO_MOCK_DATA);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* 소개 */}
          <Route path="/" element={<About />} />
          {/* Todo 중첩 */}
          <Route path="/todo">
            <Route index element={<TodoIndex todoList={todoList} />} />
            <Route
              path="add"
              element={
                <TodoAdd todoList={todoList} setTodoList={setTodoList} />
              }
            />
            <Route path="detail/:id" element={<TodoDetail />} />
            {/* detail 은 search param 으로 넘길 예정 */}
            <Route path="edit/:id" element={<TodoEdit />} />
          </Route>
          {/* 잘못된 패스 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
