import { useState } from "react";

export default function CreatePosts() {
  const [authorDetails, setAuthorDetails] = useState({
    authorName: "",
    authorEmail: "",
    authorImg: "",
    authorAbout: "",
  });
  return (
      <>
    <div>
      <h1>Author Details</h1>
      <div>
        <form action="/" method="become_an_author">
          <label for="">Name</label>
          <br />
          <input
            value={authorDetails.authorName}
            onChange={(e) => {
              setAuthorDetails({
                ...authorDetails,
                authorName: e.target.value,
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
            value={authorDetails.authorImg}
            onChange={(e) => {
              setAuthorDetails({
                ...authorDetails,
                authorImg: e.target.value,
              });
            }}
            class="form-control input-sm"
            id="inputsm"
            type="text"
            name="postTitle"
          />
          <br />
          <label for="">E-mail</label>
          <br />
          <input
            value={authorDetails.authorEmial}
            onChange={(e) => {
              setAuthorDetails({
                ...authorDetails,
                authorEmail: e.target.value,
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
                authorAbout: e.target.value,
              });
            }}
            class="form-control input-lg"
            id="inputlg"
            type="text"
            name="postBody"
          ></textarea>
          <br />
          <button class="btn btn-primary" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
