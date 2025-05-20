export default function Post({ post }) {
  return (
    <div>
      <h1>
        {" "}
        Post id: {post.id}, {post.title}
      </h1>
    </div>
  );
}
