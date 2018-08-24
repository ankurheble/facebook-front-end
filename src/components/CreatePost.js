import React from "react";

export default class CreatePost extends React.Component {
state = {
  postContent : ''
}

  render() {
    return (
      <div className="card">
        <div className="card-header">Post</div>
        <div className="card-body">
          <form
            action="/posts"
            method="POST"
            onSubmit={e => {
              e.preventDefault();
              this.props.onCreatePost(this.state.postContent);
              this.setState({
                postContent : ''
              })
            }}
            id="createPostForm"
          >
            <textarea
              className="form-control"
              rows="2"
              name="post"
              placeholder="What's on your mind ?"
              value={this.state.postContent}
              onChange={e => {
                this.setState({
                  postContent : e.target.value
                })
              }}
            />
          </form>
        </div>
        <div className="card-footer">
          <input
            className="btn btn-primary create-post"
            type="submit"
            value="Post"
            form="createPostForm"
          />
        </div>
      </div>
    );
  }
}
