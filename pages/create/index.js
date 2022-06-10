import { useState } from "react";
export default function CreatePosts() {
    const [postDetails, setPostDetails] = useState({
        postTitle: "",
        postImg: "",
        postAuthorName: "",
        postActual: "",
      });
  return (
    <div>
      <h1>Compose Article</h1>
      <div>
        <form action="/" method="post">
          <label for="">Title</label>
          <br />
          <input
            value={postDetails.postTitle}
            onChange={(e) => {
              setPostDetails({
                ...postDetails,
                postTitle: e.target.value,
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
          value={postDetails.postImg}
          onChange={(e) => {
            setPostDetails({
              ...postDetails,
              postImg: e.target.value,
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
          value={postDetails.postAuthorName}
          onChange={(e) => {
            setPostDetails({
              ...postDetails,
              postAuthorName: e.target.value,
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
          value={postDetails.postActual}
          onChange={(e) => {
            setPostDetails({
              ...postDetails,
              postActual: e.target.value,
            });
          }}
            class="form-control input-lg"
            id="inputlg"
            type="text"
            name="postBody"
          ></textarea>
          <br />
          <button class="btn btn-primary" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
