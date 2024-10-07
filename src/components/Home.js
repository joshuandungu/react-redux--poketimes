import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    console.log(this.props)
    const { posts} = this.props;
    const { post } = this.state; // Destructure post from state
    const postList = posts.length ? ( // Render post content if available
      <div className="post">
        <h4 className="center">{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div> // Loading state
    );

    return (
      <div className="container">
        {postContent}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Home);
