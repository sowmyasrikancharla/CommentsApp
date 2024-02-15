import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', commentsList: [], count: 0}

  updateName = event => {
    const {name} = this.state
    this.setState({name: event.target.value})
  }

  updateComment = event => {
    const {comment} = this.state
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {comment, name, commentsList} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4,
      name,
      comment,
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    console.log(newComment)

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  toggleLikeButton = id => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const updatedComments = commentsList.filter(eachItem => eachItem.id !== id)

    this.setState(prevState => ({
      count: prevState.count - 1,
      commentsList: updatedComments,
    }))
  }

  render() {
    const {name, comment, commentsList, count} = this.state

    return (
      <div className="full-con">
        <div className="main-con">
          <form className="left-con" onSubmit={this.onAddComment}>
            <h1 className="head">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              className="input-name"
              type="text"
              placeholder="Your Name"
              onChange={this.updateName}
              value={name}
            />
            <br />
            <textarea
              className="input-comment"
              rows="10"
              cols="50"
              placeholder="Your Comment"
              onChange={this.updateComment}
              value={comment}
            />
            <br />
            <button type="submit" className="but">
              Add Comment
            </button>
          </form>
          <div className="right-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div className="bottom-con">
          <div className="comment-box">{count}</div>
          <p>Comments</p>
        </div>
        <div>
          <ul>
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleLikeButton={this.toggleLikeButton}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
