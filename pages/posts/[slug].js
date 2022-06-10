import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';


export default function Post() {
  // const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
  //   month: 'short',
  //   day: '2-digit',
  //   year: 'numeric',
  // })
  const [post, setPost] = useState({});
  const [author,setAuthor] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  const fetchPost = () => {
    var config = {
      method: 'get',
      url: `http://127.0.0.1:3000/post/${slug}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      let result = JSON.parse(JSON.stringify(response.data));
      console.log(result.author)
      setAuthor(result.author)
      setPost(result);

    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  useEffect(()=>{
    if(!router.isReady) return;
    fetchPost();
  },[router.isReady])


  return (
    <div className="post">
      <h1>{post.title}</h1>

      <div>
        <img alt={author.name} src={author.img_url} height="40" width="40" />

        <div>
          <strong>
            <Link href={`/authors/${author.id}`}>
              <a>{author.name}</a>
            </Link>
          </strong>

          {/* <time dateTime={post.createdAt}>{prettyDate}</time> */}
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

