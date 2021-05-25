import React, { useState } from 'react'
import IndividualItem from '../../../components/IndividualItem'
import ItemManager from '../../../components/ItemManager'

const category = ({categoryItems, cat}) => {
    const [pageItems, setPageItems] = useState([])

    const updateItems = items => {
        setPageItems([...items])
        console.log(items)
    }
    return (
        <ItemManager categoryItems={categoryItems} cat={cat} itemUpdater={updateItems} />
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