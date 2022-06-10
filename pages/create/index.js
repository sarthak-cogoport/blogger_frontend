import { useState } from "react";
import axios from "axios";

export default function CreatePosts() {
    const [postDetails, setPostDetails] = useState({
        title: "",
        img_url: "",
        author_name: "",
        content: "",
      });

      const addPost = () => {
        try {
          var config = {
            method: "post",
            url: "http://127.0.0.1:3000/post",
            headers: {
              "Content-Type": "application/json",
            },
            data: postDetails,
          };
          axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
          });
        } catch (err) {
          console.log(err);
        }
      };



  return (
    <div>
      <h1>Compose Article</h1>
      <div>
          <label for="">Title</label>
          <br />
          <input
            value={postDetails.title}
            onChange={(e) => {
              setPostDetails({
                ...postDetails,
                title: e.target.value,
              });
            }}
            class="form-control input-sm"
            id="inputsm"
            type="text"
            name="postTitle"
          />
          <br />
          <label for="">Image Url</label>
          <br />
          <input
          value={postDetails.img_url}
          onChange={(e) => {
            setPostDetails({
              ...postDetails,
              img_url: e.target.value,
            });
          }}
            class="form-control input-sm"
            id="inputsm"
            type="text"
            name="postTitle"
          />
          <br />
          <label for="">Author Name</label>
          <br />
          <input
          value={postDetails.author_name}
          onChange={(e) => {
            setPostDetails({
              ...postDetails,
              author_name: e.target.value,
            });
          }}
            class="form-control input-sm"
            id="inputsm"
            type="text"
            name="postTitle"
          />
          <br />
          <label for="postText">Article</label>
          <br />
          <textarea
          value={postDetails.content}
          onChange={(e) => {
            setPostDetails({
              ...postDetails,
              content: e.target.value,
            });
          }}
            class="form-control input-lg"
            id="inputlg"
            type="text"
            name="postBody"
          ></textarea>
          <br />
          <button class="btn btn-primary" onClick={addPost}>
            Publish
          </button>
      </div>
    </div>
  );
}
