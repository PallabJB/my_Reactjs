import React from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Gallery from '../Gallery/Gallery'
import {Posts} from '../../dummyData'

const Feed = () => {
  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Share/>
          {Posts.map((p)=> (
            <Gallery key={p.id} post={p}/>
          ))}
        
         
         
        </div>
    </div>
  )
}

export default Feed