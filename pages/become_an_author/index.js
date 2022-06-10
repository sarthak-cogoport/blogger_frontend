import { useState } from "react";
import axios from "axios";
export default function CreateAuthor() {
  const [authorDetails, setAuthorDetails] = useState({
    name: "",
    email: "",
    img_url: "",
    about: "",
  });
  // const [isAdded, setIsAdded] = useState(true);
  const addAuthor = () => {
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
            />
            <br />
            <label>Image Url</label>
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
            ></textarea>
            <br />
            <button class="btn btn-primary" onClick={addAuthor}>
              Create
            </button>
          
        </div>
      </div>
    </>
  );
}
