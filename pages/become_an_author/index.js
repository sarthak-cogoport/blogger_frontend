import { useState } from "react";
import axios from "axios";
import { Alert, Form } from "react-bootstrap";
export default function CreateAuthor() {
  const [authorDetails, setAuthorDetails] = useState({
    name: "",
    email: "",
    img_url: "",
    about: "",
  });
  // const [isAdded, setIsAdded] = useState(true);
  const addAuthor = async (e) => {
    e.preventDefault();
    try {
      var config = {
        method: "post",
        url: "http://127.0.0.1:3000/author",
        headers: {
          "Content-Type": "application/json",
        },
        data: authorDetails,
      };
      axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <h1>Author Details</h1>
        <div>
          <Form onSubmit={addAuthor}>
            <label>Name</label>
            <br />
            <input
              value={authorDetails.authorName}
              onChange={(e) => {
                setAuthorDetails({
                  ...authorDetails,
                  name: e.target.value,
                });
              }}
              class="form-control input-sm"
              id="inputsm"
              type="text"
              name="postTitle"
              required
            />
            <br />
            <label>Image Link</label>
            <br />
            <input
              value={authorDetails.authorImg}
              onChange={(e) => {
                setAuthorDetails({
                  ...authorDetails,
                  img_url: e.target.value,
                });
              }}
              class="form-control input-sm"
              id="inputsm"
              type="text"
              name="postTitle"
              required
            />
            <br />
            <label>E-mail</label>
            <br />
            <input
              value={authorDetails.authorEmial}
              onChange={(e) => {
                setAuthorDetails({
                  ...authorDetails,
                  email: e.target.value,
                });
              }}
              class="form-control input-sm"
              id="inputsm"
              type="email"
              name="postTitle"
              required
            />
            <br />
            <label for="postText">About</label>
            <br />

            <textarea
              value={authorDetails.authorAbout}
              onChange={(e) => {
                setAuthorDetails({
                  ...authorDetails,
                  about: e.target.value,
                });
              }}
              class="form-control input-lg"
              id="inputlg"
              type="text"
              name="postBody"
              required
            ></textarea>
            <br />
            <button class="btn btn-primary" type="submit" disabled={!authorDetails.name}>
              Create
            </button>
            </Form>
        </div>
        <Alert variant="danger" show={!authorDetails.name}>Author's name is required.</Alert>
      </div>
    </>
  );
}
