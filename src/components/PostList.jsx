import { Link } from "react-router-dom";
import { posts } from "../data";

export default function PostList() {
  return (
    <div className="container">
      <h2>Indian Classical Music Blog</h2>
      <p>
        Welcome to a journey through the soulful world of Indian Classical Music. Explore the rich
        traditions of Hindustani and Carnatic styles, legendary artists, and timeless ragas.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
