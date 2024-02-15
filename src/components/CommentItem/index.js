// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLikeButton, deleteComment} = props
  const {name, comment, isLiked, id, initialClassName} = commentDetails
  const time = formatDistanceToNow(new Date())
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  // eslint-disable-next-line no-unused-vars
  const onClickLike = () => {
    toggleLikeButton(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  const classNAme = `${initialClassName}`

  return (
    <li className="main">
      <div className="sub-con1">
        <div className={classNAme}>{name[0]}</div>
        <h1 className="name">{name}</h1>
        <p className="text">{time}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="sub-con2">
        <button className="like-con text" onClick={onClickLike}>
          <img
            className="icon-set"
            src={likeImage}
            onClick={onClickLike}
            alt="like"
          />
          Like
        </button>
        <div>
          <button data-testid="delete" className="text" onClick={onClickDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="icon-set"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
