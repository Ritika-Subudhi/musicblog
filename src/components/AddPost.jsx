import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { posts } from "../data";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title,
      content,
    };
    posts.push(newPost); // Note: in production, use an API
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Content"
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
