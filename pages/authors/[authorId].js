import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

export default function Author() {
  const router = useRouter();
  const { authorId } = router.query;

  const [author, setAuthor] = useState({});
  const [authorPosts, setAuthorPosts] = useState([]);

  const deletePost = (id) => {
    var config = {
      method: "delete",
      url: `http://127.0.0.1:3000/post/${id}`,
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchAuthorPosts = () => {
    var config = {
      method: "get",
      url: `http://127.0.0.1:3000/author/posts/${authorId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        let result = JSON.parse(JSON.stringify(response.data));

        setAuthorPosts(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const fetchAuthor = () => {
    var config = {
      method: "get",
      url: `http://127.0.0.1:3000/author/${authorId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        let result = JSON.parse(JSON.stringify(response.data));

        setAuthor(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (!router.isReady) return;
    fetchAuthor();
    fetchAuthorPosts();
  }, [router.isReady]);

  return (
    <div className="author">
      <img alt={author.name} src={author.img_url} height="120" width="120" />
      <h1>{author.name}</h1>
      <h2>About</h2>
      <p>{author.about}</p>
      <h2>Posts</h2>

      <ul>
        {authorPosts.map((post) => (
          <Card>
            <Card.Body>
              <div key={post.title}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
                <div>
                <button
                  className="btn-danger btn-sm"
                  onClick={() => {
                    deletePost(post.id);
                    window.location.reload(false);
                  }}
                >
                  Delete
                </button></div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </div>
  );
}
