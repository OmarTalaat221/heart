import "./index.css";

function SubButton({ onClick, title }) {
  return (
    <button onClick={onClick} className="col-1-subject">
      <span className="subject-header">{title}</span>
    </button>
  );
}

export default SubButton;
