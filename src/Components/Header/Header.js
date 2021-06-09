import React from 'react'
import './Header.style.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../Assets/4.1 crown.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
               <Logo className='logo'/>  
            </Link>

            <div className='options'>
                <Link to='/shop' className='option'>
                    Shop
                </Link>

                <Link to='/shop' className='option'>
                    Contact
                </Link>
            </div>
        </div>
    )
}



export default Header;