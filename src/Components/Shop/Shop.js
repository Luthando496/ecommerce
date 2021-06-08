import React from 'react'
import ShopData from './ShopData'
import PreviewCollection from '../Preview/Preview Collection.js'

class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            collections: ShopData
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {collections.map(({id,...otherProps})=> (
                    <PreviewCollection key={id} {...otherProps}/>
                ))}
            </div>
        )
    }
}



export default ShopPage;