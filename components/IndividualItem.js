import React from 'react'
import styles from '../styles/Home.module.css'

const IndividualItem = ({item, removeItem}) => {

    return (
        <div>
            <p className={styles.itemText}>{item} <button className={styles.removeButton} onClick={removeItem} name={item} value="remove">X</button></p>
        </div>
    );
}



export default IndividualItem;