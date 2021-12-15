import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
const Header = () => {
    return (
        <div className="header">
            <IconButton>
             <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img className="header_logo" src="https://pics.freeicons.io/uploads/icons/png/3137331471557996975-512.png" alt="None"/>
            <IconButton>
             <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}
export default Header
