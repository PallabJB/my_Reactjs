import React, { useState } from 'react'
import up from '../../assets/post/up.png'
import heart from '../../assets/post/heart.png'
import {Users} from '../../dummyData'


import { MoreVert } from '@mui/icons-material'
import './Gallery.css'
const Gallery = ({post}) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () =>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u) => u.id == post?.userId)[0].profilePicture} alt="pic" className="postProfileImg"/>
            <span className='postUsername'>
              {Users.filter((u) => u.id == post.userId)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={up} alt="" className="likeIcon" onClick={likeHandler} />
            <img src={heart} alt="" className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Gallery