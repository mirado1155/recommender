import React from 'react'
import styles from '../styles/Home.module.css'

const IndividualItem = ({item, removeItem}) => {

    return (
        <div className={styles.itemTextDiv}>
            <p className={styles.itemText}>{item} <a className={styles.itemRemove} onClick={removeItem} name={item} value="remove">X</a></p>
        </div>
    );
}



export default IndividualItem;