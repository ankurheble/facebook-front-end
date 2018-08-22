import React from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";

export default function Post(props) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <div className="flex align-end">
            <img className="img-circle" src="https://picsum.photos/40/40" />
            <div className="flex column ml-2">
              <p className="mb-0 text-primary">user.name</p>
              <p className="text-muted text-sm">Post.CreatedAt</p>
            </div>
          </div>
          <div className="flex column">
            <p>post.content</p>
          </div>
          <hr />
          <div className="flex">
            <span className="text-warning mr-2" id="likes-${post.id}">
              Post.Likes Likes
            </span>
            <a
              className="no-anchor-color fa fa-thumbs-up fa-white m-auto like-btn"
              href="#"
              data-id="post.id"
              data-resource-type="post"
            >
              Like
            </a>
            <a
              className="no-anchor-color fa fa-comment fa-white m-auto"
              href="#"
            >
              Comment
            </a>
            <a
              className="no-anchor-color fa fa-share-square fa-white m-auto"
              href="#"
            >
              Share
            </a>
          </div>
          <hr />
          <div className="comments">
            <ul className="list-group" data-id="post.id">
              <Comment />
            </ul>
          </div>
        </div>
        <div className="card-footer bg-transparent">
          <CreateComment />
        </div>
      </div>
    </React.Fragment>
  );
}
