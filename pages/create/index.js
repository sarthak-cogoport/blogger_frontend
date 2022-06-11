import { useState } from "react";
import axios from "axios";
import { Alert, Form } from "react-bootstrap";

export default function CreatePosts() {
  const [postDetails, setPostDetails] = useState({
    title: "",
    img_url: "",
    author_name: "",
    content: "",
  });

  const addPost = async (e) => {
    e.preventDefault();
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
        <Form onSubmit={addPost}>
          <label>Title</label>
          <br />
          <input
            value={postDetails.title}
            onChange={(e) => {
              setPostDetails({
                ...postDetails,
                title: e.target.value,
              });
            }}
            className="form-control input-sm"
            id="inputsm"
            type="text"
            name="postTitle"
            required
          />
          <br />
          <label>Image Link</label>
          <br />
          <input
            value={postDetails.img_url}
            onChange={(e) => {
              setPostDetails({
                ...postDetails,
                img_url: e.target.value,
              });
            }}
            className="form-control input-sm"
            id="inputsm"
            type="url"
            name="postTitle"
            required
          />
          <br />
          <label>Author Name</label>
          <br />
          <input
            value={postDetails.author_name}
            onChange={(e) => {
              setPostDetails({
                ...postDetails,
                author_name: e.target.value,
              });
            }}
            className="form-control input-sm"
            id="inputsm"
            type="text"
            name="postTitle"
            required
          />
          <br />
          <label>Article</label>
          <br />
          <textarea
            value={postDetails.content}
            onChange={(e) => {
              setPostDetails({
                ...postDetails,
                content: e.target.value,
              });
            }}
            className="form-control input-lg"
            id="inputlg"
            type="text"
            name="postBody"
            style={{ height: "230px" }}
            required
          ></textarea>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            
            disabled={!postDetails.author_name}
          >
            Publish
          </button>
        </Form>
        <Alert variant="danger" show={!postDetails.author_name}>
          Author's name is required.
        </Alert>
      </div>
    </div>
  );
}
