import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/');
  }
  render() {
    console.log(this.props);
   // Destructure post from props

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div classNme="center">
          <button className='btn grey' onClick={this.handleClick}>Delete blog</button>
        </div>
      </div>
    ) : (
      <div className="center">Post not found</div> // Indicate that the post is not found
    );

    return (
      <div className="container">
        {postContent}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.post_id, 10); // Convert to number
  return {
    post: state.posts.find(post => post.id === id), // Ensure id type is consistent
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch(deletePost(id)) }
  }

}
export default connect(mapStateToProps)(Post);
