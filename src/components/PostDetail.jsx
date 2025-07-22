import { useParams, Link } from "react-router-dom";
import { posts } from "../data";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p className="container">Post not found.</p>;

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/">← Back to Posts</Link>
    </div>
  );
}
