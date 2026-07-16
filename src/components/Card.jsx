import "./Card.css";
import { MdClose } from "react-icons/md";

function Card({ post, onDelete }) {
  return (
    <div className="card">

      <img
        src={`https://i.pravatar.cc/80?img=${post.id}`}
        alt="Profile"
      />

      <div className="card-content">
        <h3>{post.title}</h3>

        <p>{post.body}</p>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(post.id)}
      >
        <MdClose />
      </button>

    </div>
  );
}

export default Card;