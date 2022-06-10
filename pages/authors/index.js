import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Authors() {
  const [authors, setAuthors] = useState([])
  const fetchAuthors = () => {
    var config = {
      method: "get",
      url: "http://127.0.0.1:3000/author/all",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        let result = JSON.parse(JSON.stringify(response.data));

        setAuthors(result)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(()=>{
    fetchAuthors();
  },[]);
   
  return (
    <div className="authors">
      <h1>Authors</h1>

      {authors.map((author) => (
        <div key={author.id}>
          <h2>
            <Link href={`authors/${author.id}`}>
              <a>{author.name}</a>
            </Link>
          </h2>

          <img
            alt={author.name}
            src={author.img_url}
            height="80"
            width="80"
          />

          {/* <p>{author.posts} post(s)</p> */}

          <Link href={`authors/${author.id}`}>
            <a>Go to profile →</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
