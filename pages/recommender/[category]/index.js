import React, { Component, useEffect, useState, componentDidMount } from 'react'
import IndividualItem from '../../../components/IndividualItem'

const category = ({categoryItems, cat}) => {

    
    const [items, setItems] = useState(0)
    const [toAdd, setToAdd] = useState(0)

    const handleClick = event => {
        let name = event.target.name
        let action = event.target.value
        manageItem(name, action)
    }

    const handleKeyup = event => {
        let name = event.target.name
        let action = event.target.value
    }

    const manageItem = async (name, action) => {

        const res = await fetch (`http://192.168.0.103:3000/categories/${cat}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: `${name}`,
                action: `${action}`
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const confirmation = await res.json()
        console.log(confirmation)
        window.location.reload()
    }

    const updateAdd = event => {
        setToAdd(event.target.value)
    }

    let itemsList

    !items ? setItems(categoryItems) : itemsList = items.map(item => {
        return <IndividualItem item={item} removeItem={handleClick} />
    });

    return (
        <div>
            <h2>{cat}</h2>
            <form>
                <label htmlFor="toAdd">Add Item: </label>
                <input type="text" id="toAdd" onKeyUp={handleKeyup} onChange={updateAdd}></input>
                <button onClick={handleClick} value="add" name={toAdd}>Add Item</button>
            </form>
            <div className="itemViewer">
            <ul>
                {items ? itemsList.map(item => {
                    return item;
                }) : null}
            </ul>
            </div>
        </div>
    )
}

export const getServerSideProps = async context => {
    const res = await fetch(`http://192.168.0.103:3000/categories/${context.params.category}`)

    const categoryItems = await res.json()
    const cat = context.params.category

    return {
        props: {categoryItems, cat}
    }
}

export default category