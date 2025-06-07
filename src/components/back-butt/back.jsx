import { Icon } from "@iconify/react/dist/iconify.js";
import "./back.css";

function BackButt({ onClick }) {
  return (
    <button onClick={onClick} className="back-buttonn">
      <Icon icon="mingcute:arrow-left-fill" />
    </button>
  );
}

export default BackButt;
