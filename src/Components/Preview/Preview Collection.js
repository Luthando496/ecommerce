import React from 'react'
import './Preview Collection.style.scss'
import CollectionItem from '../Collection Item/CollectionItem'


const PreviewCollection = ({items,title}) => {

   
    return (
        <div className='collection-preview'>

            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item,idx)=> idx < 4).map(({id,...otherPropses}) => (
                        <CollectionItem key={id} {...otherPropses} />
                    ))
                }
            </div>
        </div>
    )
}


export default PreviewCollection