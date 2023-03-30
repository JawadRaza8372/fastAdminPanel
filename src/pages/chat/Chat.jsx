import React, { useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import "./chat.scss"
import ServiceCard from '../post/PostCard'
import SearchIcon from '@mui/icons-material/Search';

const Chat = () => {

  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(!open)
  }


  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='search__bar'>
              <SearchIcon className='rightIcon' />
              <input type="text" placeholder='SEARCH' />
          </div>
        <div className='Services' style={{ color: "#fff", padding: "40px" }}>
           <ServiceCard />
        </div>
      </div>
    </>
  )
}

export default Chat