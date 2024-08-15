import React from 'react'
import './Sidebar.css'
import { RssFeed,Chat, PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline, Event,School } from '@mui/icons-material'
import { Users } from '../../dummyData'
import women from '../../assets/person/women.jpeg'
import CloseFriend from '../CloseFriend/CloseFriend'

const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="sideWrapper">
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon'/>
            <span className='sidebarListItemText'>Feed</span>
           
          </li>
          <li className='sidebarListItem'>
            <Chat className='sidebarItem'/>
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined className='sidebarItem'/>
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarItem'/>
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarItem'/>
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className='sidebarItem'/>
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarItem'/>
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarItem'/>
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarItem'/>
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
               {Users.map(u=> (
                <CloseFriend key={u.id} user={u} />
               ))}
        </ul>
      </div>
      </div>
  )
}

export default Sidebar