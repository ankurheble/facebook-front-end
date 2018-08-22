import React from "react";

export default function CreatePost(props) {
  return (
    <div className="card">
      <div className="card-header">Post</div>
      <div className="card-body">
        <textarea
          className="form-control"
          rows="2"
          name="post"
          placeholder="What's on your mind ?"
        />
      </div>
      <div className="card-footer">
        <button className="btn btn-primary create-post" type="button">
          Post
        </button>
      </div>
    </div>
  );
}
