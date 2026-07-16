import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import "./Sidebar.css";

function Sidebar({ openFeedback }) {
  const { view, setView } = useContext(PostContext);

  return (
    <div className="sidebar">

      <div className="box">
        <h2>👋 Hi Reader</h2>
        <p>Here's your News!</p>
      </div>

      <div className="box">
        <h3>View Toggle</h3>

        <div className="toggle">

          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            📋 List
          </button>

          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            🔲 Grid
          </button>

        </div>

      </div>

      <div className="box">

        <h3>Have a Feedback?</h3>

        <button
          className="feedbackBtn"
          onClick={openFeedback}
        >
          We're Listening!
        </button>

      </div>

    </div>
  );
}

export default Sidebar;