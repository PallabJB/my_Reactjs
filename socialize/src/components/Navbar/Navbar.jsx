import React from 'react'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import women from '../../assets/person/women.jpeg'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()

  const handleLoginAccount = ()=>{
    navigate('/login')
  }

  const handleRegister = ()=>{
    navigate('/register')
  }
  const handlelogo = () =>{
    navigate('/')
  }

  return (
    <div className='navbarContainer'>
        <div className="navbarleft">
            <span className='logo' onClick={handlelogo} >Socialize</span>
        </div>
        <div className="navbarCenter">
            <div className="searchbar">
                <Search className='searchIcon' />
                <input placeholder="Search for friends, post, videos..." className="searchInput" />
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
                <span className='navbarLink' onClick={handleLoginAccount} >Log In</span>
                <span className='navbarLink' onClick={handleRegister} >Sign Up</span>
            </div>
            <div className='navbarIcons'>
                <div className='navbarIconItem'>
                    <Person/>
                    <span className='navbarIconBadge'>1</span>
                </div>
                <div className='navbarIconItem'>
                    <Chat/>
                    <span className='navbarIconBadge'>1</span>
                </div>
                <div className='navbarIconItem'>
                    <Notifications/>
                    <span className='navbarIconBadge'>1</span>
                </div>
            </div>
            <img src={women} alt='pic' className='navbarImg' />
        </div>        
    </div>
  )
}

export default Navbar