import React, { useState } from 'react'
import MenuItem from '../MenuItem/MenuItem.component'
import './Directory.style.scss'

const Directory = () => {

    const [sections, setSections] = useState([
        {
            title: 'Hats',
            imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 0,
            wid:'open'
        },

        {
            title: 'Sneakers',
            imageUrl: 'https://images.unsplash.com/photo-1581068506097-9eb0677b95af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            id:1,
        },

        {
            title: 'Hoodies',
            imageUrl: 'https://images.unsplash.com/photo-1517298257259-f72ccd2db392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=332&q=80',
            id:2,
        },
        {
            title: 'Jackets',
            imageUrl: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id:3,
            
        },
        {
            title: 'Mens',
            imageUrl: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id:4,
        },

        {
            title: 'Jeans',
            imageUrl:'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 6,
            size:'large',
        },
        {
            title: 'Womens',
            imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80',
            id: 5,
            size:'large',
        },
        {
            title: 'Áccesories',
            imageUrl:'https://images.unsplash.com/photo-1611923134239-b9be5816e23c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 7,
            size:'large',
        }
    ])
    return (
        <div className='directory-menu'>
            {sections.map(sect => (
                <MenuItem title={sect.title} key={sect.id} imageUrl={sect.imageUrl} size={sect.size} wid={sect.wid} />
            ))}

        </div>
    )
}


export default Directory