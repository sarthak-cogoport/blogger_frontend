export default function CreatePosts(){
    return (
        <div>
            <h1>Compose</h1>
<div>
    <form action="/" method="post">
        <label for="">Title</label><br />
        <input class="form-control input-sm" id="inputsm" type="text" name="postTitle" /><br />
        <label for="postText">Post</label><br />
        <textarea class="form-control input-lg" id="inputlg" type="text" name="postBody"></textarea><br />
        <button class="btn btn-primary" type="submit">Publish</button>
    </form>
</div>

        </div>
    )
}