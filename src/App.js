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

  onLikePost = postId => {
    Axios.post(`http://localhost:3000/posts/${postId}/likes`).then(response => {
      if(response.data.updatedLikes){
        let posts = this.state.posts;
        posts.find(post => {
          return post._id === postId
        }).likes ++ ;
        this.setState({
          posts : posts
        })
      }
    })
  }

  onLikeComment = comment => {
    ///comments/:id/likes
    Axios.post(`http://localhost:3000/comments/${comment._id}/likes`).then(response => {
      if(response.data.updatedLikes){
        let posts = this.state.posts;
        posts.find(post => {
          return post._id === comment.post
        }).comments.find(comment1 => {
          return comment1._id === comment._id
        }).likes ++;
        this.setState({
          posts : posts
        })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container wall-width">
          <Wall
            posts={this.state.posts}
            onCreateComment={this.onCreateComment}
            onCreatePost={this.onCreatePost}
            onLikePost={this.onLikePost}
            onLikeComment={this.onLikeComment}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
