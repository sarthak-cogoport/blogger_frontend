import Link from "next/link";

export default function PostsList ({ posts }) {
  return (
    <div>
      {posts.map((post) => {
        // const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
        //   month: 'short',
        //   day: '2-digit',
        //   year: 'numeric',
        // })

        return (
            <div className="posts">
          <article key={post.id}>
            <h2>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </h2>

            {/* <p>{post.excerpt}</p> */}
            {post.author?<div>
              <img
                alt={post.author.name}
                src={post.author.img_url}
                height="40"
                width="40"
              />

              <div>
                <strong>{post.author.name}</strong>
                {/* <time dateTime={post.createdAt}>{prettyDate}</time> */}
              </div>
            </div>:null}
            

            <Link href={`/posts/${post.id}`}>
              <a>Read more →</a>
            </Link>
          </article>
          </div>
        );
      })}
    </div>
  );
};
