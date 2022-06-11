import Link from "next/link";
import { Card } from "react-bootstrap";

export default function PostsList({ posts }) {
  const pdate = (d) =>{
    const prettyDate = new Date(d).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
    return prettyDate;
  }
  return (
    <div>
      {posts.map((post) => {
        
        

        return (
          <Card>
            <Card.Body>
          <div className="posts">
            <article key={post.id}>
              <h2>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>

              <p>{post.content.substring(0, 60) + "..."}</p>
              {post.author ? (
                <div>
                  <img
                    alt={post.author.name}
                    src={post.author.img_url}
                    height="40"
                    width="40"
                  />

                  <div>
                    <strong>{post.author.name}</strong>
                    <time dateTime={post.created_at}>{pdate(post.created_at)}</time>
                  </div>
                </div>
              ) : null}

              <Link href={`/posts/${post.id}`}>
                <a>Read more →</a>
              </Link>
            </article>
          </div>
          </Card.Body></Card>
        );
      })}
    </div>
  );
}
