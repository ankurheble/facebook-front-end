import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Wall(props) {
  return (
    <React.Fragment>
      <CreatePost onCreatePost={props.onCreatePost} />
      <div className="posts">
        {props.posts.map(post => {
          return (
            <Post
              key={post._id}
              post={post}
              onCreateComment={props.onCreateComment}
              onLikePost={props.onLikePost}
              onLikeComment={props.onLikeComment}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
