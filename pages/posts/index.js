import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Form, InputGroup,Button } from 'react-bootstrap';
import axios from 'axios';


export default function Posts() {
  const [search, setSearch] = useState("");
  const [postSearch,setPostSearch] = useState([]);
  const [posts, setPosts] = useState([]);
  const fetchPosts = (title) => {
    
    try {
      axios
        .get(`http://127.0.0.1:3000/post/search/${title}`,{
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((response) => {
          let result =JSON.parse(JSON.stringify(response));
          let {data} = result
          console.log(data)
          setPostSearch(data);
          
        });
    } catch (err) {
      console.log(err);
    }
  };


  const fetchAllPosts = (title) => {
    
    try {
      axios
        .get(`http://127.0.0.1:3000/post/all`,{
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((response) => {
          let result =JSON.parse(JSON.stringify(response));
          let {data} = result
          console.log(data)
          setPosts(data);
          
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    fetchAllPosts();
  },[])

  return (
    <div className="posts">
      <h1>Posts</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Titles"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-primary" id="button-addon2" onClick={()=>fetchPosts(search)}>
          Search
        </Button>
      </InputGroup>

      {posts.map(post => {
        // const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
        //   month: 'short',
        //   day: '2-digit',
        //   year: 'numeric',
        // })

        return (
          <article key={post.id}>
            <h2>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </h2>

            {/* <p>{post.excerpt}</p> */}

            <div>
              <img alt={post.author.name} src={post.author.img_url} height="40" width="40" />

              <div>
                <strong>{post.author.name}</strong>
                {/* <time dateTime={post.createdAt}>{prettyDate}</time> */}
              </div>
            </div>

            <Link href={`/posts/${post.id}`}>
              <a>Read more →</a>
            </Link>
          </article>
        )
      })}
    </div>
  )
}


