import React from 'react';

const imgQty = 18

const randomImage = (props) => {

    const style = {
        width: 150,
        height: 200,
        backgroundColor: 'dodgerblue',
        display: 'inline-block',
        margin: 2,
        border: '5px solid #333',
        borderBottom: '5px solid #222',
        borderLeft: '5px solid #222',
        borderRadius: 4,
        boxSizing: 'border-box',
        backgroundImage: `url(https://unsplash.it/150/200?image=${props.num})`,
        transition: 'background-image 1s ease-in-out'
    }
    
    return (
        <div>
            
        </div>
    )
}

export default randomImage;
