import React from 'react'
import './MenuItem.style.scss'


const Menuitem = (props) => {

    const {title,imageUrl,size ,wid} = props
    return (
        <div  className={`${size} ${wid} menu-item`}>
            <div className='background-img'  style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
              <span className='subtitle'>Shop Now</span>
            </div>
        </div>
            
        
    )
}



export default Menuitem;