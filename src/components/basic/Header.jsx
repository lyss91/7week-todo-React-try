import { Link } from "react-router-dom";

const Header = () => {
  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#007bff", // 파란색 버튼
    border: "none",
    borderRadius: "5px",
    textDecoration: "none", // 밑줄 제거
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const hoverStyle = {
    ...buttonStyle,
    backgroundColor: "#0056b3", // 호버 시 색상
  };

  return (
    <header>
      <Link
        to="/"
        style={buttonStyle}
        onMouseEnter={e =>
          (e.target.style.backgroundColor = hoverStyle.backgroundColor)
        }
        onMouseLeave={e =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Header.jsx [Home]
      </Link>
      <Link
        to="/"
        style={buttonStyle}
        onMouseEnter={e =>
          (e.target.style.backgroundColor = hoverStyle.backgroundColor)
        }
        onMouseLeave={e =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Header.jsx [About]
      </Link>
      <Link
        to="/todo"
        style={buttonStyle}
        onMouseEnter={e =>
          (e.target.style.backgroundColor = hoverStyle.backgroundColor)
        }
        onMouseLeave={e =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Header.jsx [Todo]
      </Link>
    </header>
  );
};

export default Header;
