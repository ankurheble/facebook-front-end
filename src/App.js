import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Wall from "./components/Wall";
import Axios from "axios";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    Axios.get("http://localhost:3000/").then(response => {
      this.setState({ posts: response.data.posts });
    });
  };

  onCreateComment = (event, postId) => {
    let newComment = event.target.children[0].children[2].value;
    event.target.children[0].children[2].value = "";
    Axios.post(`http://localhost:3000/posts/${postId}/comments`, {
      comment: newComment
    }).then(response => {
      console.log(response.data.post);
      let newPosts = this.state.posts.filter(post => {
        return post._id !== response.data.post._id;
      });
      newPosts.push(response.data.post);
      this.setState({
        posts: newPosts
      });
    });
  };

  onCreatePost = postContent => {
    console.log(postContent);
    Axios.post("http://localhost:3000/posts",{ post : postContent}).then(response => {
      this.setState({
        posts : this.state.posts.concat(response.data.post)
      })
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container wall-width">
          <Wall
            posts={this.state.posts}
            onCreateComment={this.onCreateComment}
            onCreatePost={this.onCreatePost}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
