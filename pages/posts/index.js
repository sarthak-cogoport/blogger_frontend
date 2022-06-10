import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Form, InputGroup,Button } from 'react-bootstrap';
import axios from 'axios';

import { getAllPosts, getAuthorBySlug } from '../../lib/api'

export default function Posts({ posts }) {
  const [search, setSearch] = useState("");
  const [postSearch,setPostSearch] = useState([]);
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
        const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })

        return (
          <article key={post.slug}>
            <h2>
              <Link href={post.permalink}>
                <a>{post.title}</a>
              </Link>
            </h2>

            <p>{post.excerpt}</p>

            <div>
              <Image alt={post.author.name} src={post.author.profilePictureUrl} height="40" width="40" />

              <div>
                <strong>{post.author.name}</strong>
                <time dateTime={post.createdAt}>{prettyDate}</time>
              </div>
            </div>

            <Link href={post.permalink}>
              <a>Read more →</a>
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map(post => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    }
  }
}
