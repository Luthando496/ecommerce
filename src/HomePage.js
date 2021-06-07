import React from 'react'
import './HomePage.style.scss'


const HomePage=()=> {
    return (
      <div className='homepage'>
        <div className='directory-menu'>
          <div className='menu-item'>
            <div className='constent'>
              <h1 className='title'>Hats</h1>
              <span className='subtitle'>Shop Now</span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='constent'>
              <h1 className='title'>Mens</h1>
              <span className='subtitle'>Shop Now</span>
            </div>
          </div>
  
          <div className='menu-item'>
            <div className='constent'>
              <h1 className='title'>Jackets</h1>
              <span className='subtitle'>Shop Now</span>
            </div>
          </div>
  
                <div className='menu-item'>
            <div className='constent'>
              <h1 className='title'>Womens</h1>
              <span className='subtitle'>Shop Now</span>
            </div>
                </div>
                
                <div className='menu-item'>
            <div className='constent'>
              <h1 className='title'>Sneakers</h1>
              <span className='subtitle'>Shop Now</span>
            </div>
                </div>
                
                <div className='menu-item'>
            <div className='constent'>
              <h1 className='title'>Hoodies</h1>
              <span className='subtitle'>Shop Now</span>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default HomePage;
  