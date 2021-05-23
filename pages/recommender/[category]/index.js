import React from 'react'
import IndividualItem from '../../../components/IndividualItem'

const category = ({items, cat}) => {
    console.log(items);
    return (
        <div>
            <h2>{cat}</h2>
            <ul>
                
            </ul>
        </div>
    )
}

export const getServerSideProps = async context => {
    const res = await fetch(`http://192.168.0.103:3000/categories/${context.params.category}`)

    const items = await res.json()
    const cat = context.params.category

    return {
        props: {items, cat}
    }
}

export default category