import { useState } from "react";
import "./FeedbackModal.css";

function FeedbackModal({ show, close }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  if (!show) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.name.trim() === "" ||
      form.email.trim() === "" ||
      form.feedback.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Thank you for your feedback!");

    setForm({
      name: "",
      email: "",
      feedback: "",
    });

    close();
  };

  return (
    <div className="overlay">
      <div className="modal">

        <h2>Thank you so much for taking the time!</h2>

        <p>Please provide the below details.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="feedback"
            placeholder="Enter your Feedback"
            value={form.feedback}
            onChange={handleChange}
          ></textarea>

          <div className="buttons">

            <button type="submit">
              Submit
            </button>

            <button
              type="button"
              onClick={close}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default FeedbackModal;