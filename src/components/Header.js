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
            <img className="header_logo" src="https://cdn-icons.flaticon.com/png/512/4401/premium/4401438.png?token=exp=1639505027~hmac=4e678eaa39958ea1b2b602edfbfaacb7" alt="None"/>
            <IconButton>
             <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}
export default Header
