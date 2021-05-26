import React, { useState } from 'react'
import Recommender from '../../../components/Recommender'
import ItemManager from '../../../components/ItemManager'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import config from '../../../config.json'

const category = ({categoryItems, cat}) => {
    const [pageItems, setPageItems] = useState()

    const updatePageItems = items => {
        setPageItems(items)
    }

    pageItems == undefined ? setPageItems(categoryItems) : null
    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.itemTitle}>{cat}</h2>
                <Link href="/">
                    <button className={styles.button}>Go Back</button>
                </Link>
            </header>
            <div className={styles.grid}>
                <ItemManager categoryItems={categoryItems} cat={cat} updatePageItems={updatePageItems} />
                <Recommender items={pageItems} />
            </div>
        </div>
    )
}

export const getServerSideProps = async context => {
    // const res = await fetch(`http://192.168.0.103:3000/categories/${context.params.category}`)

    const res = await fetch(config.baseURL + context.params.category)

    const categoryItems = await res.json()
    const cat = context.params.category

    return {
        props: {categoryItems, cat}
    }
}

export default category