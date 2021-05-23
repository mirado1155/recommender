import React from 'react'

const category = ({items, cat}) => {
    console.log(items);
    return (
        <div>
            <h2>{cat}</h2>
            <ul>
                {items.map(item => {
                    return <li>{item}</li>
                })}
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