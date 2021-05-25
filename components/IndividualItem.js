import React from 'react'

const IndividualItem = ({item, removeItem}) => {

    return (
        <div>
            <p>{item} <button onClick={removeItem} name={item} value="remove">X</button></p>
        </div>
    );
}



export default IndividualItem;