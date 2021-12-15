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
            <img className="header_logo" src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504943.png?token=exp=1639582677~hmac=072ea424d9a1a75cf39e0aa3da87e247" alt="None"/>
            <IconButton>
             <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}
export default Header
