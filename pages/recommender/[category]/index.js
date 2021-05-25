import React, { Component, useEffect, useState, componentDidMount } from 'react'
import IndividualItem from '../../../components/IndividualItem'

const category = ({categoryItems, cat}) => {
    
    const [items, setItems] = useState(0)

    let itemsList

    !items ? setItems(categoryItems) : itemsList = items.map(item => {
        return <IndividualItem item={item} />
    });

    return (
        <div>
            <h2>{cat}</h2>
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