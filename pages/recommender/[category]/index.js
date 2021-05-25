import React, { useState } from 'react'
import IndividualItem from '../../../components/IndividualItem'
import ItemManager from '../../../components/ItemManager'
import Link from 'next/link'

const category = ({categoryItems, cat}) => {
    const [pageItems, setPageItems] = useState([])

    const updatePageItems = items => {
        setPageItems(items)
    }
    console.log(pageItems)
    return (
        <div>
            <h2>{cat}</h2>
            <Link href="/">
                <button>Go Back</button>
            </Link>
            <ItemManager categoryItems={categoryItems} cat={cat} updatePageItems={updatePageItems} />
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